import React, { useContext, useEffect, useState } from "react";
import ChatbotModal from "./WidgetModal";
import { v4 as uuidv4 } from "uuid";
import Modal from "./LanguageModal";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const { isFrench, isOpenModal, setIsOpenModal } = useAppContext();

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
          setIsOpenModal(true);
        }
      }
    }
  }, []);

  return (
    <div className="relative bg-black h-screen w-full">
      {isOpenModal && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
          </motion.div>
        </div>
      )}

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
