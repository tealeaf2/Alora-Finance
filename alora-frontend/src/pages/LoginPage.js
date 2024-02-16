import React, {useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';

import plant3 from '../images/plant3.png';

function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }


  const logUserAndPwd = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

    return (
    
    // container for whole page
    <div className="flex h-screen items-center justify-center">
      {/* grid container for the login box and image */}
      <div className="grid grid-cols-2  mx-16 xl:mr-[300px]  flex-1">

        {/* container for alora finance logo */}
        <div className=' absolute bottom-0 left-[-80px] flex flex-col justify-center max-w-[60vw] justify-self-center'>
          <img alt="alora finance logo" src={plant3} className="App-header-logo-width" width="100%" height='60px'/>         
        </div>

        {/* login box */}
        <div className=" aspect-square flex flex-col col-start-2 justify-center items-center grow p-5 md:px-[6%] rounded-[14%] border-2 border-[#CFDADD] max-w-[600px] ">
          <h1 className="text-center text-register-green text-4xl lg:text-[2.6rem] font-bold mb-4 lg:mb-8">
            Sign In
          </h1>

          {/* container for username element */}
          <div className='flex mb-3 lg:mb-4 self-stretch'>
            <div className='px-6 border-2 border-r-0 border-[#C5E3C4] rounded-l-full'></div>
            <div className='flex-1'>
              <label
              htmlFor="Username"
              className="relative block overflow-hidden rounded-r-full border-2 border-[#C5E3C4] pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >

            <input
              type="email"
              id="Username"
              placeholder="Username"
              className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange = {usernameChangeHandler}
            />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Username
            </span>

            </label>
            </div>
          </div>
          
          {/* container for password element */}
          <div className='flex mb-4 lg:mb-5 self-stretch'>
            <div className='px-6 border-2 border-r-0 border-[#C5E3C4] rounded-l-full'></div>
            <div className='flex-1'>
              <label
              htmlFor="Password"
              className="relative block overflow-hidden rounded-r-full border-2 border-[#C5E3C4] pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >

              <input
                type="password"
                id="Password"
                placeholder="Password"
                class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange = {passwordChangeHandler}
             />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
            >
              Password
            </span>

            </label>
            </div>
          </div>

          {/* login button */}
          <button
          className="rounded-3xl border border-register-green bg-register-green px-12 py-2 text-xl font-medium text-white hover:bg-transparent hover:text-[#4F6038] focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 lg:mb-1.5"
          to=""
          onClick = {logUserAndPwd}

        >
          log in
        </button>

        {/* forgot password link */}
        <Link
        className="text-sm mb-2 lg:mb-4"
        to="/reset-password"
        >
          Forgot Password?
        </Link>

        {/* don't have account yet text */}
        <p
        className='mb-[-5px]'
        >
          Don't have an account yet?
        </p>

        {/* create account link */}
        <Link
        className="text-register-green"
        to="/register"
        >
          Create an account
        </Link>
        </div>
        

        
      </div>
    </div>
    
    )
}

export default LoginPage