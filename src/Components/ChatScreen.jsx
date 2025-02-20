import React, { useState } from "react";
import FAQSection from "./FAQSection";
import Chat from "./ChatBot";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-white  pt-6 pb-12 px-8">
      {/* Fixed Logo */}
      <img src="/logo.png" alt="Cotech Logo" className="w-32 mb-6" />

      {/* Fixed Background Screen */}
      <div className=" w-full bg-[#f3f5f5] min-h-[85vh] rounded-4xl flex flex-col justify-between items-center p-10">
        {/* Dynamic Content (FAQ or Chat Section) */}
        {!open ? <FAQSection /> : <Chat />}

        {/* Input Section (Single) */}
        <div className="py-3 bg-white border-t border-gray-200 flex items-center space-x-2 w-full md:w-xl lg:w-4xl xl:w-5xl 2xl:w-7xl  rounded-3xl p-4">
          <input
            type="text"
            placeholder="Saisissez un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-3xl text-lg px-6 h-14 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#FFA92F] hover:bg-[#FFCC85] transition-all text-white flex justify-center items-center rounded-4xl w-20 h-12"
          >
            <img src="/send.svg" alt="Send" className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
