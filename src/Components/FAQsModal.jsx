const FAQsModal = () => {
  return (
    <div className="flex flex-col justify-between flex-grow w-full h-full">
      <div className="flex flex-col justify-center items-center flex-grow">
        <h2 className="text-center text-lg font-medium mb-4">
          Bienvenue sur CotechAI!
        </h2>
        <p className="text-gray-600 text-center text-sm mb-6 px-4">
          Votre assistant 24h/24 et 7j/7 pour le soutien en déneigement,
          excavation et équipements agricoles.
        </p>
      </div>

      {/* FAQ Section at Bottom */}
      <div className="p-3 bg-white rounded-t-2xl w-full">
        <h1 className="text-sm font-medium px-2 my-4">Foire aux questions</h1>
        <div className="space-y-2">
          {[
            "Quels services propose Cotech ?",
            "Proposez-vous une assistance en plusieurs langues ?",
            "Comment votre chatbot aide-t-il à répondre aux questions ?",
          ].map((question, index) => (
            <button
              key={index}
              className="text-left px-4 py-2 rounded-full border text-xs border-[#FFA92F] w-full"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsModal;