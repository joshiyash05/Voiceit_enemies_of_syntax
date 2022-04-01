import React, { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { Navbar } from "../components/Navbar";

export const Translation = () => {
  const [value, setValue] = useState('')
  const [lang, setLang] = useState('en')
  const [translate, setTranslate] = useState('')
  const translateText = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "");

    var formdata = new FormData();
    formdata.append("lang", lang);
    formdata.append("txt", value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://dishant.pythonanywhere.com/language", requestOptions)
      .then(response => response.text())
      .then(result => setTranslate(result.replace('"', '').replace('"', '')))
      .catch(error => console.log('error', error));
  }
  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", "");

  //   var formdata = new FormData();
  //   formdata.append("lang", lang);
  //   formdata.append("txt", value);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow'
  //   };

  //   fetch("https://dishant.pythonanywhere.com/language", requestOptions)
  //     .then(response => response.text())
  //     .then(result => setTranslate(result))
  //     .catch(error => console.log('error', error));
  // }, [])
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-[90vh]">
        <h1 className='text-5xl font-semibold my-12'>Translate</h1>
        <div className="flex gap-8">
          <input 
            type='text'
            className='mb-12 w-[40vw] px-4 py-2 rounded-lg text-lg text-lblue bg-navy ml-[-10px] border-none focus:ring-2 outline-0 focus:ring-lblue'
            placeholder='Type here'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <select id="inputState" className='mb-12 w-[18vw] px-4 py-2 rounded-lg text-lg text-lblue bg-navy ml-[-10px] border-none focus:ring-2 outline-0 focus:ring-lblue' name="lang" onChange={e => setLang(e.target.value)}>
            <option selected value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="pa">Punjabi</option>
            <option value="sd">Sindhi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="ur">Urdu</option>
            <option value="my">Myanmar</option>
            <option value="ne">Nepali</option>
          </select>
        </div>
        <textarea 
          type='text'
          className='mb-12 w-[60vw] px-4 py-2 rounded-lg text-lg text-lblue bg-navy ml-[-10px] border-none focus:ring-2 outline-0 focus:ring-lblue'
          value={translate}
        />
        <button className='text-xl' onClick={translateText}>Translate</button>
      </div>
    </div>
  );
}
