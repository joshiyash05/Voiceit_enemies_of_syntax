import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../utils/VoiceIt.png' 

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  },[]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/')
    } catch (error) {
      console.log(error.message);
      setError(true)
      setEmail("");
      setPassword('');
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center justify-center w-full min-h-screen">
        <Link to='/'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-6">
          <p className="text-6xl text-center">Log in</p>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-end w-96">
          <input type='text' className='w-full text-lblue bg-navy rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-lblue' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          <div className='w-full'>
            <input type={showPassword ? 'text' : 'password'} className='w-full text-lblue bg-navy rounded-lg px-5 py-3 ml-[-10px] border-none focus:ring-2 outline-0 focus:ring-lblue' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/> 
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} className='ml-[-31px] text-gray-200' onClick={() => setShowPassword(!showPassword)} /> : <FontAwesomeIcon icon={faEye} className='ml-[-30px] text-gray-200' onClick={() => setShowPassword(!showPassword)} />}
            {error ? <h1 className='text-xs pt-2 text-red-700'>*Invalid Credentials</h1> : <h1>&ensp;</h1>}
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center w-96">
          <button className='w-full py-2 bg-lblue font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-lblue' onClick={() => login()}>Log in</button>
          <Link to='/signup' className="text-sm font-medium text-center hover:text-dblue">Don't have an account? Register here</Link>  
        </div>
      </div>
    </div>
  )
}

export default Login;