import React from "react";
import { useAppContext } from "../context/AppContext";

const FAQSection = () => {
  const { isFrench } = useAppContext();

  const faqQuestions = isFrench
    ? [
        "Où puis-je acheter les accessoires Cotech ?",
        "Quels sont les produits que vous proposez ?",
        "Quels sont vos produits les plus populaires ?",
      ]
    : [
        "Where can I buy Cotech accessories?",
        "What products do you offer?",
        "What are your most popular products?",
      ];

  return (
    <div className="relative flex flex-col justify-center lg:justify-between h-[60vh] 2xl:h-[65vh] max-h-[65vh] items-center w-full">
      {/* Replace Image */}
      <div className="flex flex-col items-center w-full">
        <img
          src="/Bot.svg"
          alt="AI Bot"
          className=" w-full  sm:w-1/2 lg:w-1/4 -mb-12"
        />
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center">
          {isFrench ? "Discutez avec" : "Chat with"}{" "}
          <span className="text-[#FFA92F]">Alfred</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg text-center max-w-2xl mt-2">
          {isFrench
            ? "Notre chatbot intelligent est là pour vous aider avec toutes vos questions sur nos services, produits et plus encore—disponible 24h/24 et 7j/7."
            : "Our intelligent chatbot is here to assist you with any questions about our services, products, and more—available 24/7."}
        </p>
      </div>
      {/* FAQ Questions */}
      <div className="bg-white p-4 w-full mt-6 hidden lg:block">
        <h2 className="text-lg font-semibold mb-3">
          {isFrench ? "Foire aux questions" : "Frequently Asked Questions"}
        </h2>
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
