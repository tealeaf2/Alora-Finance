import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';

import home_dude from '../images/Home-Dude.png';

function LoginPage() {
    return (
       
    <div className="flex h-screen items-center justify-center">
      <div class="grid grid-cols-2  mx-20  md:max-w-[75vw] xl:max-w-[1000px] flex-1">
        <div className="grid-col justify-center grow p-5 rounded-[40px] border-2 border-[#BACAA2] max-w-[450px]">
          <h1 class="text-center text-[#76974A] text-4xl font-bold mb-3">
            Sign In
          </h1>
          <div className='flex mb-3'>
          <div className='pl-10 border-2 border-r-0 border-login-green rounded-l-full'></div>
          <div>
            <label
            for="Username"
            className="relative block overflow-hidden rounded-r-full border-2 border-[#d2e5ba] pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="email"
              id="Username"
              placeholder="Username"
              class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-login-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
            >
              Username
            </span>

            </label>
            </div>
          </div>
          

            <div>
            <label
            for="Username"
            className="relative block overflow-hidden rounded-full border-2 border-login-green px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="password"
              id="Password"
              placeholder="Password"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#D4DDC8] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Password
            </span>

            </label>
            </div>
        </div>
        
          
        <div className=' justify-center max-w-[450px] justify-self-center'>
          <Link to="/progress">
            <img alt="alora finance logo" src={home_dude} className="App-header-logo-width" width="100%" height='60px'/>         
          </Link>
        </div>
      </div>
    </div>
    
    )
}

export default LoginPage