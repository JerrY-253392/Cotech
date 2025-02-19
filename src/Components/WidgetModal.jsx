import React, { useState } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import FAQsModal from "./FAQsModal";
import { useNavigate } from "react-router-dom";
import ChatModal from "./ChatModal";

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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        <SlSizeFullscreen
          fontsize={25}
          className="cursor-pointer"
          onClick={() => navigate("/chat-screen")}
        />
      </div>

      {/* Body Section */}
      {!open ? (
        <FAQsModal setOpen={setOpen} />
      ) : (
        <ChatModal messages={messages} />
      )}

      {/* Shared Input Section */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Saisissez un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-full text-sm px-4 py-2 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="from-[#ffA92f] to-[#ffcc85] bg-gradient-to-r text-white px-4 py-2 rounded-lg"
          >
            <img src="/send.svg" alt="Send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;