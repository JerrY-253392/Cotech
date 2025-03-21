import React, { useEffect, useState } from "react";
import FAQSection from "./FAQSection";
import Chat from "./ChatBot";
import axios from "axios";
import { useAppContext } from "../context/AppContext";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const userId = localStorage.getItem("userId");
  const [isLoading, setIsLoading] = useState(false);
  const { isFrench, toggleLanguage } = useAppContext();

  const faqQuestions = isFrench
    ? [
        "Où puis-je acheter les accessoires Cotech ?",
        "Quels sont les produits que vous proposez ?",
        "Quels sont vos produits les plus populaires ?",
      ]
    : [
        "Where can I buy Cotech accessories?",
        "What products do you offer?",
        "What are your most popular products?",
      ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userLang = navigator.language || navigator.userLanguage;
      if (isFrench) {
        if (!userLang.startsWith("fr")) {
          toggleLanguage(false);
        }
      }
    }
  }, []);

  const handleSendMessage = () => {
    setIsLoading(true);
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);

      axios
        .post(`${import.meta.env.VITE_API_URL}/chat?user_id=${userId}`, {
          query: input,
        })
        .then((res) => {
          console.log("response", res.data);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: res.data.response, sender: "bot" },
          ]);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setIsLoading(false);
        });

      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleFaqClick = (question) => {
    setInput(question);
  };
  

  return (
    <div className="h-screen bg-white  pt-6 pb-12 px-8">
      <div className="flex justify-between items-center mb-6 ">
        <img src="/logo.png" alt="Cotech Logo" className="w-32 " />
      </div>
      {/* Fixed Background Screen */}
      <div className=" w-full bg-[#f3f5f5] min-h-[85vh] rounded-4xl flex flex-col justify-between items-center p-10">
        {/* Dynamic Content (FAQ or Chat Section) */}
        {!messages.length ? (
          <FAQSection faqQuestions = {faqQuestions}  handleFaqClick = {handleFaqClick}/>
        ) : (
          <Chat isLoading={isLoading} messages={messages} />
        )}

        {/* Input Section (Single) */}
        <div className="py-3 bg-white border-t border-gray-200 flex items-center space-x-2 w-full rounded-3xl p-4">
          <input
            type="text"
            placeholder={`${
              isFrench ? "Saisissez un message..." : "Enter a message..."
            }`}
            value={input}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setInput(e.target.value)}
            className="lg:flex-grow border w-full border-gray-300 rounded-3xl text-sm sm:text-base lg:text-lg px-2 sm:px-4 lg:px-6  h-10  sm:h-12 lg:h-14 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={() => handleSendMessage()}
            className={`${
              !input ? "cursor-not-allowed" : "cursor-pointer"
            } bg-[#FFA92F] hover:bg-[#FFCC85] transition-all text-white flex justify-center items-center rounded-4xl w-12 sm:w-16 lg:w-20 h-8 sm:h-10 lg:h-12`}
          >
            <img src="/send.svg" alt="Send" className="w-5 sm:w-6 lg:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
