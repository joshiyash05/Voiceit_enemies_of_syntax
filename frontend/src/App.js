import "./App.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ObjectDetection from "./screens/ObjectDetection";
import SignDetection from "./screens/SignDetection";
import SpeechToText from "./screens/SpeechToText";
import TextToSpeech from "./screens/TextToSpeech";
import { Home } from './screens/Home.jsx'
import { DeafDumb } from "./screens/DeafDumb";
import { DyslexiaReader } from "./screens/DyslexiaReader";
import { Chat } from "./screens/Chat";
import { Translation } from "./screens/Translation";
function App() {
  return (
    <div className="App bg-cream text-navy">
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />     
          <Route path="/deaf_and_dumb" element={<DeafDumb />} /> 
          <Route path="/dyslexia_reader" element={<DyslexiaReader />} />   
          <Route path="/speech_to_text" element={<SpeechToText />} />   
          <Route path="/text_to_speech" element={<TextToSpeech />} />   
          <Route path="/translate" element={<Translation />} />   
          <Route path="/object_detection" element={<ObjectDetection />} />     
          <Route path="/sign_detection" element={<SignDetection />} />    
          <Route path="/chat" element={<Chat />} />    
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;