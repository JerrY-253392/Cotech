import { createContext, useContext, useState } from "react";

// Create App Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [isFrench, setIsFrench] = useState(true);

  const toggleLanguage = (value) => {
    setIsFrench(value);
  };

  return (
    <AppContext.Provider value={{ isFrench, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
