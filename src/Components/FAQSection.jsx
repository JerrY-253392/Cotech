import React from "react";

const FAQSection = () => {
  const faqQuestions = [
    "Quels services propose Cotech ?",
    "Proposez-vous une assistance en plusieurs langues ?",
    "Comment puis-je demander une consultation ?",
    "Où puis-je trouver vos derniers projets ?",
    "Comment votre chatbot aide-t-il à répondre aux questions ?",
  ];

  return (
    <div className="relative flex flex-col justify-between h-[65vh] items-center w-full">
      {/* Replace Image */}
      <div className="flex flex-col items-center w-full"> 
        <img src="/Bot.svg" alt="AI Bot" className="w-1/5 -mb-6" />
        <h1 className="text-2xl font-semibold">
          Discutez avec <span className="text-[#FFA92F]">Cotech</span> AI
        </h1>
        <p className="text-gray-500 text-center max-w-lg mt-2">
          Notre chatbot intelligent est là pour vous aider avec toutes vos
          questions sur nos services, produits et plus encore—disponible 24h/24
          et 7j/7.
        </p>
      </div>
      {/* FAQ Questions */}
      <div className="bg-white p-4 w-full max-w-7xl rounded-2xl mt-6">
        <h2 className="text-lg font-semibold mb-3">Foire aux questions</h2>
        <div className="flex flex-wrap gap-2">
          {faqQuestions.map((question, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm border border-[#FFA92F] rounded-full text-black hover:bg-[#FFA92F] hover:text-white transition"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
