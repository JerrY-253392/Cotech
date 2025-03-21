import React, { useContext, useEffect, useState } from "react";
import ChatbotModal from "./WidgetModal";
import { useAppContext } from "../context/AppContext";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isFrench, toggleLanguage } = useAppContext();
  const userId = localStorage.getItem("userId");

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

  return (
    <div className="relative bg-black h-screen w-full">
      <div className="absolute bottom-0 left-0 p-6">
        {isOpen && <ChatbotModal userId={userId} />}
        <img
          src="/Chatbot.png"
          alt="chatbot"
          className="w-12 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default ChatWidget;
