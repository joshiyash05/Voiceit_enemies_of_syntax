import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export const DeafDumb = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className="py-24 px-48 h-[90vh]">
        <h1 className='text-5xl font-semibold mb-16'>Deaf and Dumb</h1>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center items-center">
            <Link to='/speech_to_text'>
              <Card name='Speech to Text' data='The speech to text feature will convert spoken words into to the text.' />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to='/text_to_speech'>
              <Card name='Text to Speech' data='The text to speech feature will convert the text written on the screen into the voice available in the system.' />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to='/dyslexia_reader'>
              <Card name='Dyslexia Reader' data='This will convert the font written in image which is not user friendly to a normal text which user can easily read.' />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to='/object_detection'>
              <Card name='Object Detection' data='The Object Detection Tool is made to detect the object that user shows in front of the camera.' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
