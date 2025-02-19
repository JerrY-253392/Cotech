import { useEffect, useRef } from "react";

const ChatModal = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative flex items-center justify-center min-h-[620px] min-w-[400px]">
      {/* Background Image */}
      <img
        src="/background.png"
        alt="background"
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Chat Modal */}
      <div className="h-full flex flex-col justify-between min-h-[620px] min-w-[400px] rounded-lg shadow-lg overflow-hidden relative">
        {/* Chat Messages */}
        <div className="p-4 flex-1 flex flex-col-reverse overflow-y-auto space-y-3">
          {messages
            .slice()
            .reverse()
            .map((msg, index) => (
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
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <img src="/User.svg" alt="User" className="w-10" />
                )}
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
