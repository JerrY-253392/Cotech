import React, { useState } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import FAQsModal from "./FAQsModal";
import { useNavigate } from "react-router-dom";
import ChatModal from "./ChatModal"

const ChatbotModal = () => {
  const [messages, setMessages] = useState([
    {
      text: "Lorem ipsum dolor sit amet.",
      sender: "bot",
    },
    {
      text: "Nam vel est in mauris congue efficitur. Pellentesque scelerisque viverra enim.",
      sender: "user",
    },
    {
      text: "Scelerisatt emiw n lin.",
      sender: "bot",
    },
    {
      text: "Pellentesque scelerisque viverra enim.",
      sender: "user",
    },
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="bg-[#f3f5f5] min-h-[672px] max-w-[400px] shadow-lg relative">
      {/* Header Section */}
      <div className="p-4 border-b bg-white border-gray-200 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-24" />
        <SlSizeFullscreen fontsize={25} className="cursor-pointer" onClick={() => navigate('/chat-screen')} />
      </div>

      {/* Body Section */}
      {!open ? (
        <FAQsModal
          handleSendMessage={handleSendMessage}
          input={input}
          setInput={setInput}
          setOpen={setOpen}
        />
      ) : (
        <ChatModal
          messages={messages}
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default ChatbotModal;
