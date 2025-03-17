import React from "react";
import { useAppContext } from "../context/AppContext";

const Modal = ({ isOpen, onClose }) => {
  const { toggleLanguage } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative scale-100 opacity-100 transition-transform duration-300">
      {/* Modal Content */}
      <h1 className="text-sm  ">The website is in french!!  Translate into English?</h1>

      {/* Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => {
            toggleLanguage(false);
            onClose();
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Yes
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
