import React, { useState } from "react";
import ChatBot from "./ChatBot";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const faqQuestions = [
    "Quels services propose Cotech ?",
    "Proposez-vous une assistance en plusieurs langues ?",
    "Comment puis-je demander une consultation ?",
    "Où puis-je trouver vos derniers projets ?",
    "Comment votre chatbot aide-t-il à répondre aux questions ?",
  ];

  const [open, setOpen] = useState(false);

  return !open  ? (
    <div className=" h-screen bg-white p-12">
      <div className=" mb-4">
        <img src="/logo.png" alt="Cotech Logo" className="w-32 ml-6" />
      </div>

      <div className=" w-full bg-[#f3f5f5] min-h-[95%]   rounded-4xl flex flex-col justify-between items-center p-10 ">
        <div className="flex flex-col items-center mb-10">
          <img src="/Bot.svg" alt="AI Bot" className="w-1/2 -mb-6 " />
          <h1 className="text-2xl font-semibold">
            Discutez avec <span className="text-[#FFA92F]">Cotech</span>AI
          </h1>
          <p className="text-gray-500 text-center max-w-lg mt-2">
            Notre chatbot intelligent est là pour vous aider avec toutes vos
            questions sur nos services, produits et plus encore—disponible
            24h/24 et 7j/7
          </p>
        </div>

        <div className="bg-white p-4 max-w-7xl  rounded-2xl ">
          <div>
            <h2 className="text-lg font-semibold mb-3">Foire aux questions</h2>
            <div className="flex flex-wrap gap-2">
              {faqQuestions.map((question, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm border border-[#FFA92F] rounded-full text-black hover:bg-[#FFA92F] hover:text-white transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="py-3 mt-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Saisissez un message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow border border-gray-300 rounded-3xl text-lg px-6 h-16 focus:ring focus:ring-yellow-400 focus:outline-none"
              />
              <button
                // onClick={handleSendMessage}
                onClick={() => setOpen(true)}
                className=" bg-linear-to-r  from-[#FFA92F] to-[#FFCC85] transition-all ease-in-out duration-300 text-white flex justify-center items-center cursor-pointer hover:bg-linear-to-l  rounded-4xl w-28 h-14"
              >
                <img src="/send.svg" alt="Send" className="w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ChatBot />
  );
};

export default ChatScreen;
