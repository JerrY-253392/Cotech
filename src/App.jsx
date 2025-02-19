import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatWidget from "./Components/ChatWidget";
import ChatScreen from "./Components/ChatScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatWidget />} />
      <Route path="/chat-screen" element={<ChatScreen />} />
    </Routes>
  );
}

export default App;