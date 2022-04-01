import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { Navbar } from "../components/Navbar";

function SpeechToText() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-[90vh]">
        <h1 className='text-5xl font-semibold my-12'>Speech To Text</h1>
        <textarea
          className='mb-12 w-[60vw] h-36 px-4 py-2 rounded-lg text-lg text-lblue bg-navy'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className='py-2 px-4 bg-lblue text-lg rounded-lg shadow-lg font-semibold' onMouseDown={listen} onMouseUp={stop}>
          🎤
        </button>
        {listening && <div className='text-3xl font-semibold my-8 text-lblue'>Go ahead I'm listening</div>}
      </div>
    </div>
  );
}

export default SpeechToText;
