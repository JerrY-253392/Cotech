import React from "react";

const Chat = () => {
  return (
    <div className="w-full flex flex-col space-y-4 overflow-y-auto">
      {/* Chat Messages */}
      <div className="flex items-center justify-end space-x-4">
        <p className="bg-white px-4 py-2 text-lg rounded-lg shadow">
          Bonjour, pouvez-vous m'aider ?
        </p>
        <img src="/User.svg" alt="User" className="w-10" />
      </div>

      <div className="flex items-start space-x-4">
        <img src="/AI.svg" alt="AI bot" className="w-10" />
        <div className="border border-[#FFA92F]  p-4 rounded-lg">
          <p>Bien sûr ! Comment puis-je vous aider aujourd'hui ?</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
