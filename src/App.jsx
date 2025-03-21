import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatWidget from "./Components/ChatWidget";
import ChatScreen from "./Components/ChatScreen";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    localStorage.clear();
    if (!userId) {
      const newUserId = uuidv4();
      setUserId(newUserId);
      localStorage.setItem("userId", newUserId);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ChatWidget />} />
      <Route path="/chat-screen" element={<ChatScreen />} />
    </Routes>
  );
}

export default App;
