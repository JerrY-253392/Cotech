import React, { useEffect, useRef } from "react";
import Markdown from "react-markdown";

const Chat = ({ isLoading, messages }) => {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col space-y-4 max-h-[65vh] overflow-y-auto"
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-start space-x-4 ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender !== "user" && (
            <img src="/AI.svg" alt="AI bot" className="w-10" />
          )}
          <p
            className={`px-4 py-2 text-lg rounded-lg shadow ${
              msg.sender === "user" ? "bg-white" : "border border-[#FFA92F]"
            }`}
          >
            <Markdown>{msg.text}</Markdown>
          </p>
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
  );
};

export default Chat;
