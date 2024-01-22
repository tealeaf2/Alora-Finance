import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';

import home_dude from '../images/Home-Dude.png';

function LoginPage() {
    return (
       
    <div class="flex flex-col h-screen items-center justify-center">
      <div class="flex mx-20">
        <div class="flex-col justify-center grow p-5 rounded-3xl border-2 border-[#BACAA2]">
          <h1 class="text-center">
            Sign In
          </h1>
          <div>
            <label
            for="Username"
            class="relative block overflow-hidden rounded-full border-2 border-login-green px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="email"
              id="Username"
              placeholder="Username"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              class="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#D4DDC8] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Username
            </span>

            </label>
            </div>

            <div>
            <label
            for="Username"
            class="relative block overflow-hidden rounded-full border-2 border-login-green px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

            <input
              type="password"
              id="Password"
              placeholder="Password"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              class="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#D4DDC8] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              Password
            </span>

            </label>
            </div>
        </div>
        
          
        <div>
          <Link to="/progress">
            <img alt="alora finance logo" src={home_dude} className="App-header-logo-width" width="260px" height='60px'/>         
          </Link>
        </div>
      </div>
    </div>
    
    )
}

export default LoginPage