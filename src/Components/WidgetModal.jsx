import React, { useEffect, useState } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import FAQsModal from "./FAQsModal";
import { useNavigate } from "react-router-dom";
import ChatModal from "./ChatModal";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { FaFlag, FaFlagUsa } from "react-icons/fa";

const ChatbotModal = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isFrench } = useAppContext();
  const navigate = useNavigate();

  const questions = isFrench
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
  }

  return (
    <div className="bg-[#f3f5f5] min-w-[400px] max-w-[400px] shadow-lg relative flex flex-col h-[600px]">
      {/* Header Section */}
      <div className="p-4 border-b bg-white border-gray-200 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-24" />
          <SlSizeFullscreen
            fontSize={25}
            className="cursor-pointer"
            onClick={() => navigate("/chat-screen")}
          />
      </div>

      {/* Main Body (Flexible Space) */}
      <div className="relative flex-grow flex flex-col justify-center items-center overflow-hidden">
        <img
          src="/background.png"
          alt="background"
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {!messages.length ? (
          <FAQsModal questions = {questions} handleFaqClick = {handleFaqClick} />
        ) : (
          <ChatModal isLoading={isLoading} messages={messages} />
        )}
      </div>

      {/* Input Section (Fixed at Bottom) */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={`${
              isFrench ? "Saisissez un message..." : "Enter a message..."
            }`}
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-full  px-4 py-2 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={() => handleSendMessage()}
            className={`${
              !input ? "cursor-not-allowed" : "cursor-pointer"
            } from-[#ffA92f] to-[#ffcc85]  bg-gradient-to-r text-white px-4 py-2 rounded-lg`}
          >
            <img src="/send.svg" alt="Send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
