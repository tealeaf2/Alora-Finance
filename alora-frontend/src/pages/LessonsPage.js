// just continue styling and buttons: cursor
// try the slider exactly but with text instead of images


import Header from '../global/Header';

// import home_logo from '../images/Home_Logo.png';
// import home_dude from "../images/Home-Dude.png";
// import money_tree from "../images/Money_Tree.png";
// import sprout from "../images/Sprout.png";
// import water_droplets from "../images/Water-Droplets.png";

// import { Carousel } from 'flowbite';
import { useState } from "react";
  


// formatting: fit text into set container dimensions, container dimensions and how it would adjust to changing window size
// animation: what should happen if answer all questions correct, one question wrong?, duration length
export function QuizCarousel({quiz}) {

    let [current, setCurrent] = useState(0);

    let previousQuestion = () => {
      if (current === 0) setCurrent(0);
      else setCurrent(current - 1);
    };

    let nextQuestion = () => {
        if (current === quiz.length - 1) setCurrent(quiz.length-1);
        else setCurrent(current + 1);
      };
    
  
    return (
        <div className="relative">
            <div className="flex overflow-hidden relative h-90 rounded-lg md:h-70"> {/* <!-- Carousel wrapper --> */}
                {/* compare justify-center, align-center, items-center */}
                {/* make the centering more efficient and less repetitive with all the justifying centering */}
                <div className="flex transition ease-in-out duration-300 h-full w-full items-center justify-center bg-gray-400/50 dark:bg-gray-700 dark:text-white px-5" style={{transform: `translate(-${current * 100}%)`,}}>
                    {quiz.map((question) => {
                        return (
                            <div className="space-y-1 w-full" key={quiz.id}>
                                <p className="text-sm">Question {question.id+1} out of {quiz.length}</p>
                                {/* maybe better to do text left cuz it's annoying to align the question number with it */}
                                <p className="bg-white border-2 rounded-3xl text-center px-5 py-1">{question.question}</p>
                                {/* also fix horizontal padding so options are inside of arrows but question is inline */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 pb-10 py-2 px-6"> 
                                {/* use index for border colors */}
                                    {question.options.map((option, index) =>{
                                        return (
                                            <div key={index} className="cursor-pointer flex border-2 rounded-3xl items-center text-center justify-center px-5 py-2 bg-white">
                                                {option}
                                                
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        )
                    })}
                </div>

                <button onClick={previousQuestion} className="absolute top-1/2 -translate-y-1/3 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextQuestion} className="absolute top-1/2 -translate-y-1/3 right-0 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {quiz.map((s, i) => {
                    return (
                        <div onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer  ${
                            i == current ? "bg-white" : "bg-gray-500"
                        }`}></div>
                    );
                })}
            </div>

            {/* <!-- Slider controls --> */}
            
            {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl"> */}
                
            {/* </div> */}

            {/* <button onClick={previousQuestion} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={nextQuestion} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
        </div>
    );
}


export function Test({quiz}){
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(quiz.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === quiz.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {quiz.map((s) => {
          return (
            <div>{s.question}</div>
            // <img src={s} />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl">
                <button onClick={previousSlide} className="cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextSlide} className="cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-black/80 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {quiz.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default function LessonsPage () {

    // is formatting of question ok? should abcd be included in original string? ask daniel how they will be outputted from backend
    let quiz = [
        {
            "id":0,
            "question": "What does the concept of 'Time Value of Money' primarily emphasize?",
            "options":
                ["a) The value of money decreases over time due to inflation.",
                "b) Earning interest on both the principal and the accumulated interest.",
                "c) Money can only be invested in time-bound projects.",
                "d) The value of money remains constant over time."],
            "answer": 1
        },
    ];

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
    

    return (
        <>
        <Header />

        <h1>HAHAHAHAHAHAHA IDK WHAT I'M DOING</h1>

        <QuizCarousel quiz={quiz}/>
        {/* <Test quiz={slides}/> */}
        {/* <Test quiz={slides}/> */}

        </>
    );
}


{/* <div className="hidden duration-500 ease-in-out flex h-full items-center justify-center bg-gray-400/50 dark:bg-gray-700 dark:text-white" data-carousel-item>
                    slide 1
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={home_dude} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={money_tree} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={sprout} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src={water_droplets} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div> */}


{/* <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}