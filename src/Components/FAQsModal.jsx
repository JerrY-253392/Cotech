const FAQsModal = ({ handleSendMessage, input, setInput, setOpen }) => {
  return (
    <div className="">
      <div className="relative p-6 min-h-96 ">
        <img
          src="/background.png"
          alt="background"
          className="absolute top-8"
        />
        <div className="flex flex-col justify-center items-center h-64">
          <h2 className="text-center text-lg font-medium mb-4">
            Bienvenue sur CotechAI!
          </h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Votre assistant 24h/24 et 7j/7 pour le soutien en déneigement,
            excavation et équipements agricoles. Aide experte pour des
            équipements de qualité OEM, accès concessionnaire et réponses
            rapides.
          </p>
        </div>
      </div>

      <div className="p-3 bg-white rounded-t-2xl border-t border-gray-200">
        {/* FAQ Section */}
        <h1 className="text-sm font-medium px-2 my-4">Foire aux questions</h1>
        <div className="space-y-2">
          {[
            "Quels services propose Cotech ?",
            "Proposez-vous une assistance en plusieurs langues ?",
            "Comment votre chatbot aide-t-il à répondre aux questions ?",
          ].map((question, index) => (
            <button
              key={index}
              className="text-left px-4 py-2 rounded-full border text-xs border-[#FFA92F] "
            >
              {question}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
          <input
            type="text"
            placeholder="Saisissez un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg text-sm px-3 py-1 focus:ring focus:ring-yellow-400 focus:outline-none"
          />
          <button
            onClick={() => setOpen(true)}
            className="from-[#ffA92f] to-[#ffcc85] bg-gradient-to-r text-white px-4 py-2 rounded-lg"
          >
            <img src="/send.svg" alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQsModal;
