import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';

import home_dude from '../images/Home-Dude.png';

function LoginPage() {
    return (
       
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-2  mx-20  md:max-w-[75vw] xl:max-w-[1000px] flex-1">
        <div className="flex flex-col justify-center items-center grow p-5 md:px-[6%] rounded-[14%] border-2 border-[#BACAA2] max-w-[450px]">
          <h1 className="text-center text-[#76974A] text-4xl font-bold mb-4">
            Sign In
          </h1>
          <div className='flex mb-3 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-login-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
            htmlFor="Username"
            className="relative block overflow-hidden rounded-r-full border-2 border-[#d2e5ba] pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="email"
              id="Username"
              placeholder="Username"
              className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-login-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
            >
              Username
            </span>

            </label>
            </div>
          </div>
          

          <div className='flex mb-3 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-login-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
            htmlFor="Password"
            className="relative block overflow-hidden rounded-r-full border-2 border-[#d2e5ba] pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="password"
              id="Password"
              placeholder="Password"
              class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-3 top-3 -translate-y-1/2 text-xs text-login-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
            >
              Password
            </span>

            </label>
            </div>
          </div>
          <a
          className="rounded-3xl border border-[#4F6038] bg-[#4F6038] px-12 py-2 text-xl font-medium text-white hover:bg-transparent hover:text-[#4F6038] focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1"
          href=""
        >
          log in
        </a>

        <a
        className="text-sm mb-2"
        href=""
        >
          Forgot Password?
        </a>

        <p
        className='mb-[-5px]'
        >
          Don't have an account yet?
        </p>
        <a
        className="text-[#76974A]"
        href=""
        >
          Create an account
        </a>
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