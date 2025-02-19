import React, { useState } from "react";
import ChatbotModal from "./WidgetModal";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-black h-screen w-full flex justify-end items-end p-6">
      {isOpen && <ChatbotModal />}

      <img
        src="/Chatbot.png"
        alt="chatbot"
        className=" cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default ChatWidget;
