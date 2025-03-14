import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatModal = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col flex-grow w-full h-full overflow-hidden">
      {/* Chat Messages */}
      <div
        ref={containerRef}
        className="p-4 flex-1 flex flex-col overflow-y-auto space-y-3"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "user" && (
              <img src="/AI.svg" alt="AI" className="w-10" />
            )}
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl ${
                msg.sender === "user"
                  ? "bg-white border border-gray-300"
                  : "border border-[#FFA92F] text-black"
              }`}
            >
              <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
            </div>
            {msg.sender === "user" && (
              <img src="/User.svg" alt="User" className="w-10" />
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start space-x-2">
            <img src="/AI.svg" alt="AI" className="w-10" />
            <div className="border border-[#FFA92F] px-4 w-24 rounded-xl">
              <span className="loader"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatModal;
