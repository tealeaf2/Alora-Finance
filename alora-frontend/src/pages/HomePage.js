import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import '../styles/index.css'
import HomeDude from '../images/Home_Dude.png'
import unit1 from '../images/unit-images/unit1.png'
import unit2 from '../images/unit-images/unit2.png'
import unit3 from '../images/unit-images/unit3.png'
import unit4 from '../images/unit-images/unit4.png'
import unit5 from '../images/unit-images/unit5.png'
import unit6 from '../images/unit-images/unit6.png'
import logo from '../images/logo-1.png'
import pic2 from '../images/home_page/pic2.png'
import pic3 from '../images/home_page/pic3.png'
import pic4 from '../images/home_page/pic4.png'
import license1 from '../images/home_page/license1.png'
import license2 from '../images/home_page/license2.png'
import aloraFinance from '../images/alora finance.png'

import Header from '../components/HomePage/HomeHeader';
import Button from '../components/Button.js'
import HomeSection from '../components/HomePage/HomeSection.js';
import UnitItem from '../components/HomePage/UnitItem.js';

export default function Home() {
 return (
  <div className="home-cont">
  <Header></Header>


  <section
  className="outfit">
    <div class="mx-auto max-w-screen-xl px-4 lg:py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="flex justify-center relative overflow-hidden sm:h-80 lg:h-full">
          <img
            alt="Mascot"
            src={HomeDude}
            class="absolute h-full aspect-auto"
          />
        </div>

        <div class="lg:py-16">
          <article class="flex flex-col items-center space-y-4 text-gray-600">
          <h2 class="text-3xl font-bold sm:text-4xl">
          Finance Made 
          <span
          className="text-register-green"> Fun!</span>
          </h2>

            <p>
              Revolutionizing How Students Learn About Personal Finance
            </p>

            <Button
            text="Get started!"
            link="/register"
            buttonClassName="rounded-3xl border-2 border-register-green text-white bg-register-green px-8 py-2 text-xl font-medium hover:bg-white hover:text-[#4F6038] focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 mx-2 lg:mb-1.5"
            />

            <Button
            text="I have an account"
            link="/login"
            buttonClassName="rounded-3xl border-2 border-register-green ${studentClicked ? 'bg-register-green text-white' : 'bg-white text-register-green'} px-8 py-2 text-xl font-medium hover:bg-register-green hover:text-white focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 mx-2 lg:mb-1.5"
            />
          </article>
        </div>
      </div>
    </div>

    <HomeSection
    sectionText="video based learning"
    textLeft={true}
    imgSrc={pic2}
    />

    <HomeSection
    sectionText="financial simulations"
    textLeft={false}
    imgSrc={pic3}
    />

    <HomeSection
    sectionText="customizable lesson plans"
    textLeft={true}
    imgSrc={pic4}
    />

<section class="bg-white text-black">
  <div class="m-auto max-w-screen-xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
    <div class="flex m-auto justify-center max-w-xl">
      <h2 class="text-center text-3xl font-bold sm:text-4xl">Learn More About...</h2>
    </div>

    <div class="mt-8 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
     
      <UnitItem
      src={unit1}
      alt="Unit 1 Image"
      text="Basic Principles"
      />

      <UnitItem
      src={unit2}
      alt="Unit 2 Image"
      text="Personal Insurance Policy"
      />

      <UnitItem
      src={unit3}
      alt="Unit 3 Image"
      text="Interest Rates Computations"
      />

      <UnitItem
      src={unit4}
      alt="Unit 4 Image"
      text="Credit & Credit Scores"
      />

      <UnitItem
      src={unit5}
      alt="Unit 5 Image"
      text="Simple Contracts"
      />

      <UnitItem
      src={unit6}
      alt="Unit 6 Image"
      text="Loan Applications"
      />

    </div>
  </div>
</section>


<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div class="mx-auto max-w-md text-center">
      <h1 class="text-3xl font-extrabold sm:text-3xl">
        Modern Teaching Made For Modern Students
      </h1>

      <p class="mt-1 sm:text-xl/relaxed mb-[25px]">
      No previous financial experience required!
      </p>

      <Button
      link={""}
      text="Get Early Access Now"
      buttonClassName="rounded-3xl border-2 border-register-green text-white bg-register-green px-8 py-2 text-xl font-medium hover:bg-white hover:text-[#4F6038] focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 mx-2 lg:mb-1.5"
      />
    </div>
  </div>
  </section >
  </section>

    <div
    className="grid grid-cols-2 justify-items-center">
      <img
      className='col-start-1'
      src={license1}

      />
      <img
      className='col-start-2'
      src={license2}
      />
    </div>

    <p
    className='text-center mt-8 mb-12'
    >
      Lessons made in accordance with Indiana State Senate Bill 35, as well as Jump$tart Coalition's National Standards for Personal Finance Education
    </p>

    <footer
    className="grid grid-cols-2 gap-8 bg-register-green p-12 px-6 md:px-10 mg:py-16 lg:px-16 w-full">
      <div
      className="text-white justify-self-start"
      >
        <p
        className="py-2"
        >Our misson is to provide students financial education for a better future.</p>
        <p
        className="py-2"
        >Support our cause! Sign up for our courses filled with lessons, videos, and quizzes to learn more!</p>
        <p
        className="py-2"
        >language: English</p>
        <div
        className='absolute h-max py-1 pl-2 pr-5 flex items-center justify-center bg-white mb-1'
        >
          <img
          src={logo}
          className="h-16 aspect-square"
          />

          <img
          src={aloraFinance}
          className="h-6 align-middle"
          />
        </div>

        <p
        className="mt-20"
        >
          @2023 Alora Finance
        </p>
      </div>

      <div
      className="grid grid-cols-max-3 gap-8 md:gap-16 lg:gap-20 justify-self-end justify-items-center text-white"
      >
        <div
        className='flex flex-col gap-3 w-max'
        >
          <a
          href=""
          >
            about
          </a>

          <a
          href=""
          >
            home
          </a>

          <a
          href="/register"
          >
            sign up
          </a>

          <a
          href="/login"
          >
            login
          </a>
        </div>

        <div
        className='flex flex-col gap-3'
        >
          <a
          href="/profile"
          >
            profile
          </a>

          <a
          href="/progress"
          >
            progress
          </a>

          <a
          href="/games"
          >
            games
          </a>
        </div>

        <div
        className='flex flex-col gap-3'
        >
          <a
          href="/"
          >
            all units
          </a>

          <a
          href="/"
          >
            basic principles
          </a>

          <a
          href="/"
          >
            personal insurance policy
          </a>

          <a
          href="/"
          >
            interest rates
          </a>

          <a
          href="/"
          >
            credit
          </a>

          <a
          href="/"
          >
            simple contracts
          </a>

          <a
          href="/"
          >
            loans
          </a>

        </div>
      </div>
    </footer>

  </div>



 );
}


// // function App() {
// //   return (
// //     <>
// //       <Progress/>
// //       <Games/>
// //       <Lessons/>
// //       <Profile/>
// //     </>
// //   )
// //   }
