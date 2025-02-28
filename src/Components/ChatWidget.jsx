import React, { useEffect, useState } from "react";
import ChatbotModal from "./WidgetModal";
import { v4 as uuidv4 } from "uuid";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  useEffect(() => {
    if (!userId) {
      const newUserId = uuidv4();
      setUserId(newUserId);
      localStorage.setItem("userId", newUserId);
    }
  }, []);


  return (
    <div className=" relative bg-black h-screen w-full flex  items-end p-6">
      {isOpen && <ChatbotModal userId = {userId} />}

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
