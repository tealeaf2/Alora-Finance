// put unitspage back into app.js

// just continue styling and buttons: cursor
// try the slider exactly but with text instead of images

// import { Carousel } from 'flowbite';
import React, { useState,useRef } from "react";
import "./Quiz.css";
  

// formatting: fit text into set container dimensions, container dimensions and how it would adjust to changing window size
// animation: what should happen if answer all questions correct, one question wrong?, duration length
export default function Quiz({quiz}) {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(quiz[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef("unanswered");
    let Option2 = useRef("unanswered");
    let Option3 = useRef("unanswered");
    let Option4 = useRef("unanswered");

    let option_array = [Option1, Option2, Option3, Option4];

    const OptionSelect = styled.button`
        display: flex;
        border-width: 2px;
        border-radius: 1.5rem;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: rgb(255 255 255);
        cursor: pointer;
        ${({ active }) =>
            active &&
            `
            opacity: 1; 
        `}
    `;

    const checkAns = (e, ans) => {
        if (lock === false){
            if (question.correct_option===ans){
                e.target.classList.add("correct");
                setLock(true);
            }
            else{
                e.target.classList.add("incorrect");
                option_array[ans-1].current.classList.add("correct");
                setLock(true);
                
            }
        }
        
    };

    const previousQuestion = () => {
      if (index === 0) setIndex(0);
      else setIndex(index - 1);
    };

    const nextQuestion = () => {
        if (index === quiz.length - 1) setIndex(quiz.length-1);
        else setIndex(index + 1);
    };

  
    return (
        <div className="relative">
            <div className="flex overflow-hidden relative h-90 rounded-lg md:h-70"> {/* <!-- Carousel wrapper --> */}
                {/* compare justify-center, align-center, items-center */}
                {/* make the centering more efficient and less repetitive with all the justifying centering */}
                {/* <div className="flex transition ease-in-out duration-300 h-full w-full items-center justify-center bg-gray-400/50 dark:bg-gray-700 dark:text-white px-5" style={{transform: `translate(-${current * 100}%)`,}}> */}
                            <div className="space-y-1 h-full w-full bg-gray-400/50 dark:bg-gray-700 dark:text-white px-5">
                                <p className="text-sm">Question {index+1} out of {quiz.length}</p>
                                {/* maybe better to do text left cuz it's annoying to align the question number with it */}
                                <p className="bg-white border-2 rounded-3xl text-center px-5 py-1">{question.question}</p>
                                {/* also fix horizontal padding so options are inside of arrows but question is inline */}
                                <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 pb-10 py-2 px-6"> 
                                {/* use index for border colors */}
                                    {/* {question.choices.map((option, optionindex) =>{ */}
                                        {/* return ( */}
                                            {/* timestamp: 24:00 */}
                                            <div ref={Option1} onClick={(e)=>{checkAns(e,1)}} className="flex border-2 rounded-3xl items-center text-center justify-center px-5 py-2 bg-white">
                                                a) {question.choices[0]}
                                            </div>
                                            <div ref={Option2} onClick={(e)=>{checkAns(e,2)}} className="flex border-2 rounded-3xl items-center text-center justify-center px-5 py-2 bg-white">
                                                b) {question.choices[1]}
                                            </div>
                                            <div ref={Option3} onClick={(e)=>{checkAns(e,3)}} className="flex border-2 rounded-3xl items-center text-center justify-center px-5 py-2 bg-white">
                                                c) {question.choices[2]}
                                            </div>
                                            <div ref={Option4} onClick={(e)=>{checkAns(e,4)}} className="flex border-2 rounded-3xl items-center text-center justify-center px-5 py-2 bg-white">
                                                d) {question.choices[3]}
                                            </div>
                                        {/* ) */}
                                    {/* })} */}

                                </div>
                            </div>
                {/* </div> */}

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
                            setIndex(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer  ${
                            i == index ? "bg-white" : "bg-gray-500"
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