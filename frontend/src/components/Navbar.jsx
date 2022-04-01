import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from "../firebase";
import logo from '../utils/VoiceIt.png' 

export const Navbar = () => {
  const [user, setUser] = useState([]);
  const logOut = () => {
    auth.signOut()
    setUser([])
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className='h-16 w-full px-8 py-4 bg-lblue flex justify-between items-center'>
      <div className="flex space-x-8 items-center">
        <img src={logo} alt='' className='w-8'></img>
        <Link to='/'>
          <h1 className='text-xl font-bold'>VoiceIT</h1>
        </Link>
      </div>
      <div className="flex space-x-8 items-center">
        {user ? (
          <>
            <Link className='text-lg font-semibold' to="/sign_detection">
              Sign Detection
            </Link>
            <Link className='text-lg font-semibold' to="/translate">
              Translation
            </Link>
            <Link className='text-lg font-semibold' to="/deaf_and_dumb">
              Extra
            </Link>
            <a className='text-lg font-semibold' href="https://dishant.pythonanywhere.com/">
              Video Call
            </a>
            <Link className='text-lg font-semibold' to="/chat">
              Chat
            </Link>
            <Link to='/' className='text-lg font-semibold text-red-500' onClick={() => logOut()} >Logout</Link>
          </>
        ) : (
          <>
            <Link className='text-lg font-semibold' to='/login'>Login</Link>
            <Link className='text-lg font-semibold' to='/signup'>SignUp</Link>
          </>
        )}
      </div>
    </div>
  )
}
