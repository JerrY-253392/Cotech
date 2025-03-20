import { useAppContext } from "../context/AppContext";

const FAQsModal = ({ questions, handleFaqClick }) => {
  const { isFrench } = useAppContext();

  return (
    <div className="flex flex-col justify-between flex-grow w-full h-full">
      <div className="flex flex-col justify-center items-center flex-grow">
        <h2 className="text-center text-lg font-medium mb-4">
          {isFrench ? "Bienvenue sur Alfred!" : "Welcome to Alfred!"}
        </h2>
        <p className="text-gray-600 text-center text-sm mb-6 px-4">
          {isFrench
            ? "Votre assistant 24h/24 et 7j/7 pour le soutien en déneigement, excavation et équipements agricoles."
            : "Your 24/7 assistant for snow removal, excavation, and agricultural equipment support."}
        </p>
      </div>

      {/* FAQ Section at Bottom */}
      <div className="p-3 bg-white rounded-t-2xl w-full">
        <h1 className="font-medium px-2 my-4">
          {isFrench ? "Foire aux questions" : "Frequently Asked Questions"}
        </h1>
        <div className="space-y-2">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleFaqClick(question)}
              className="text-left px-4 py-2 rounded-full border text-sm border-[#FFA92F] w-full cursor-pointer hover:bg-[#FFA92F] hover:text-white transition"
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
