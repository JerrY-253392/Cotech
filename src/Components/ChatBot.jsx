import React from "react";

const ChatBot = () => {
  return (
    <div className="h-screen bg-white p-12 flex flex-col items-center">
      <img src="/logo.png" alt="Cotech Logo" className="w-32 mb-6" />
      <div className="w-full bg-[#f3f5f5] min-h-[95%] rounded-4xl flex flex-col justify-between items-center p-10">
        {/* Chat Messages */}
        <div className="w-full overflow-y-auto p-6 flex flex-col space-y-4">
          {/* User Message */}
          <div className="flex items-center justify-end space-x-4">
            <p className="bg-white px-4 py-2 text-lg rounded-lg shadow">Bonjour, pouvez-vous m'aider ?</p>
            <img src="/User.svg" alt="User" className="w-10" />
          </div>

          {/* Bot Response */}
          <div className="flex items-start space-x-4 max-w-5xl">
            <img src="/AI.svg" alt="AI bot" className="w-10" />
            <div className="bg-[#FFA92F] text-white p-4 rounded-lg">
              <p>Bien sûr ! Comment puis-je vous aider aujourd'hui ?</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full p-4 bg-white border rounded-3xl flex items-center space-x-2">
          <input
            type="text"
            placeholder="Saisissez un message..."
            className="flex-grow border border-gray-300 rounded-3xl text-lg px-6 h-12 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button className="bg-[#FFA92F] hover:bg-[#FFCC85] transition-all text-white flex justify-center items-center rounded-4xl w-20 h-10">
            <img src="/send.svg" alt="Send" className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
