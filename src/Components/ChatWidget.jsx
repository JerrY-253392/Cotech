import React, { useState } from "react";
import ChatbotModal from "./WidgetModal";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" relative bg-black h-screen w-full flex  items-end p-6">
      {isOpen && <ChatbotModal />}

      <img
        src="/Chatbot.png"
        alt="chatbot"
        className=" w-12 absolute bottom-0 left-0 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default ChatWidget;
