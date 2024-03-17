import Progress from './ProgressPage'
import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import '../styles/index.css'

export default function Home() {
 return (
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-16">
          <article class="space-y-4 text-gray-600">
          <h2 class="text-3xl font-bold sm:text-4xl">
          Finance Made Fun!
          </h2>

            <p>
              Revolutionizing How Students Learn About Personal Finance
            </p>

            <a
              class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              Download
            </a>


            <a
              class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              Download
            </a>
          </article>
        </div>
      </div>
    </div>
    <section class="overflow-hidden bg-white sm:grid sm:grid-cols-2">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          Video Based Learning
        </h2>
      </div>
    </div>

    <img
      alt=""
      src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-56 w-full object-cover sm:h-full"
    />
  </section>
  <section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
        <h2 class="text-3xl font-bold sm:text-4xl">
        Financial Simulations
        </h2>
        </article>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Customizable Lesson Plans</h2>
      </div>
    </div>
  </div>
</section>
<section class="bg-white text-black">
  <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold sm:text-4xl">Learn More About...</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
     
      <div class="flex items-start gap-4">
        <img src="image1.jpg" alt="Image 1" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Basic Principles</h2>
        </div>
      </div>

      
      <div class="flex items-start gap-4">
        <img src="image2.jpg" alt="Image 2" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Personal Insurance Policy</h2>
        </div>
      </div>

      
      <div class="flex items-start gap-4">
        <img src="image3.jpg" alt="Image 3" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Interest Rates Computation</h2>
        </div>
      </div>

      
      <div class="flex items-start gap-4">
        <img src="image4.jpg" alt="Image 4" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Credit & Credit Scores</h2>
        </div>
      </div>

      
      <div class="flex items-start gap-4">
        <img src="image5.jpg" alt="Image 5" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Simple Contracts</h2>
        </div>
      </div>

      
      <div class="flex items-start gap-4">
        <img src="image6.jpg" alt="Image 6" class="h-16 w-16 rounded-lg"/>
        <div>
          <h2 class="text-lg font-bold">Loan Applications</h2>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Modern Teaching Made For Modern Students
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
      No previous financial experience required!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Early Access Now
        </a>
      </div>
    </div>
  </div>
</section>
  </section>

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