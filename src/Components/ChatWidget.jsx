import React, { useContext, useEffect, useState } from "react";
import ChatbotModal from "./WidgetModal";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/AppContext";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const { isFrench, toggleLanguage, setIsOpenModal } = useAppContext();

  useEffect(() => {
    if (!userId) {
      const newUserId = uuidv4();
      setUserId(newUserId);
      localStorage.setItem("userId", newUserId);
    }
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
