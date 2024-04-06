import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { listQuizzes, updateQuiz } from '../../redux/actions/quizAction'

export default function LessonsQuiz({ resetSelectedOptions, lesson}) {
  //All of this for fetching the data and intializing the website
  const [current, setCurrent] = useState(0)
  const [questions, setQuestions] = useState([])
  const location = useLocation()
  const { uid, lid } = useParams()
  const dispatch = useDispatch()
  const quizList = useSelector(state => state.quizList)
  const accountLogin = useSelector(state => state.accountLogin);
  const { accountInfo } = accountLogin;
  const { error, loading, quiz } = quizList

  useEffect(() => {
    dispatch(listQuizzes(lesson.id, accountInfo.id))
  }, [dispatch, lesson.id, accountInfo.id])
  //Derefences quiz and puts in in questions for easier readibility, very inefficient
  useEffect(() => {
    if (quiz && quiz.quiz_content && quiz.quiz_content.length > 0) {
      // Access elements of the array here
      setQuestions(quiz.quiz_content[0].question_answer)
    }
  }, [quiz]) // Run this effect whenever 'quiz' changes


  //////////////////////////////////////////////////////////
  // For tracking number of attempts and score for each attempt
  const MAX_NUM_ATTEMPTS = 3;
  const [attemptsScores, setAttemptsScores] = useState(Array(MAX_NUM_ATTEMPTS).fill(null));
  const [attemptCount, setAttemptCount] = useState(0);

  //////////////////////////////////////////////////////////

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedIndices, setClickedIndices] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (quiz && quiz.quiz_content && quiz.quiz_content.length > 0) {
      setAttemptCount(quiz.attempts)
      setScore(quiz.lesson_grade)
      setAttemptsScores(prevAttemptsScores => {
        const newAttemptsScores = [...prevAttemptsScores];
        newAttemptsScores[attemptCount] = score;
        return newAttemptsScores;
      });
    }
  }, [quiz])

  //For setting the score at the end with submit
  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_option === selectedOptions[i]?.answerByUser) {
        newScore += 1
      }
    }
    dispatch(updateQuiz(lid, accountInfo.id, newScore))
    setScore(newScore);
    setShowScore(true);
    setAttemptsScores(prevAttemptsScores => {
      const newAttemptsScores = [...prevAttemptsScores];
      newAttemptsScores[attemptCount] = newScore;
      return newAttemptsScores;
    });
    setAttemptCount(prevAttemptCount => prevAttemptCount + 1);
  }

  //For keeping track of answers
  const handleAnswerOption = (answer) => {
    setSelectedOptions(prevOptions => {
      const updatedOptions = [...prevOptions]
      updatedOptions[currentQuestion] = { answerByUser: answer }
      console.log(updatedOptions)
      return updatedOptions
    })
  }

  //For highlighting the button
  const handleAnswerOptionClick = (index) => {
    const updatedIndices = [...clickedIndices];
    updatedIndices[currentQuestion] = index;
    setClickedIndices(updatedIndices);
  };

  const handleButtonClick = (index) => {
    handleAnswerOption(index + 1);
    handleAnswerOptionClick(index);
  };

  //For moving the carousel
  const previousSlide = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const nextSlide = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  //For retaking the quiz
  const retakeQuiz = () => {
    if (attemptCount < MAX_NUM_ATTEMPTS) {
      setCurrentQuestion(0);
      setSelectedOptions([]);
      setClickedIndices(Array(questions.length).fill(null));
      setShowScore(false);
    }
  };

  // Console logs highest score everytime a submission is made. Ensures highest score is logged before page is reloaded or before user goes onto next lesson
  useEffect(() => {
    if (attemptCount > 0) {
      const highestScore = Math.max(...attemptsScores);
      console.log([highestScore, questions.length]);
    }
  }, [attemptCount, questions.length, attemptsScores])

  // Resets quiz when unit_num and/or lesson_num changes. (Otherwise answers will carry over when next/previous lesson buttons are clicked)
  useEffect(() => {
    setAttemptsScores(Array(questions.length).fill(null));
    setAttemptCount(0);

    setCurrentQuestion(0);
    setSelectedOptions([]);
    setClickedIndices(Array(questions.length).fill(null));
    setShowScore(false);
  }, [resetSelectedOptions, questions.length]);

  useEffect(() => {
    setAttemptsScores(Array(questions.length).fill(null));
    setAttemptCount(0);

    setCurrentQuestion(0);
    setSelectedOptions([]);
    setClickedIndices(Array(questions.length).fill(null));
    setShowScore(false);
  }, [location, questions.length]);


  // If I could understand what I did I'd tell you but I dont
  // Basically iterates through the questions and displays them in a carousel
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        quiz && questions.length > 0 && (
          <div className="overflow-hidden relative px-7 mt-5">
            {showScore || attemptCount >= MAX_NUM_ATTEMPTS || quiz.lesson_completed ? (
              // Container for Quiz Report
              <div className="flex flex-col w-full items-center justify-center bg-gray-100 bottom-0 max-w-screen-xl mx-auto my-2 min-h-48 rounded-2xl bg-sky-blue text-white text-lg p-7">
                {/* Score Report */}
                <div className="font-semibold text-xl">Highest Score: {Math.max(...attemptsScores)}/{questions.length} Correct</div>
                <div>--------------------</div>
                {/* Attempts remaining */}
                <div className="font-semibold">{attemptCount} {attemptCount === 1 ? "attempt" : "attempts"} made. {MAX_NUM_ATTEMPTS - attemptCount} {MAX_NUM_ATTEMPTS - attemptCount === 1 ? "attempt" : "attempts"} remaining!</div>
                {/* Score of previous attempts */}
                <div>
                  Attempt {attemptCount}: {attemptsScores[attemptCount - 1]}/{questions.length}
                </div>
                <div>--------------------</div>
                {/* Retake button */}
                <button className={`border-2 rounded-full text-white text-center px-5 py-2 text-semibold ${attemptCount >= MAX_NUM_ATTEMPTS || quiz.lesson_completed || score >= 5 ? 'bg-gray-400 text-gray-200 border-gray-400 hover:border-gray-300': 'bg-blue-500 border-blue-500 hover:border-white'}`} onClick={retakeQuiz}>Retry</button>
              </div>
            ) : (
              <>
                <div
                  className={`flex transition ease-out duration-40`}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {/* Container that has all of the questions for the quiz */}
                  <div className="flex flex-col w-full max-w-screen text-lg">
                    <div className="text-sm mx-5 my-1">Question {currentQuestion + 1} of {questions.length}</div>
                    <div className="bg-white border-4 rounded-full border-button-orange text-center font-semibold px-7 py-5 mb-6">Q{currentQuestion + 1}: {questions[currentQuestion].question}</div>
                    <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                      {questions.length > 0 &&
                        questions[currentQuestion].choices.map((choice, index) => (
                          <button
                            key={index}
                            className={`flex border-4 rounded-full items-center text-center justify-center px-7 py-5 hover:border-blue-400 ${clickedIndices[currentQuestion] === index
                              ? 'bg-blue-500/80 text-white border-slate-300'
                              : 'bg-white border-slate-400'
                              }
                              w-full`}
                            onClick={() => handleButtonClick(index)}
                          >
                            {choice}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Container for buttons */}
                <div className="flex h-full w-full justify-between items-center text-xl">
                  <button className="border-4 rounded-full border-button-orange bg-white text-center px-5 sm:px-7 py-2 my-6 hover:bg-button-orange hover:text-white text-semibold" onClick={previousSlide}>
                    Back
                  </button>
                  <button className={`border-4 rounded-full bg-white ${currentQuestion + 1 === questions.length ? 'border-blue-500' : 'border-button-orange'} text-center px-5 sm:px-7 py-2 my-6 ${currentQuestion + 1 === questions.length ? 'hover:bg-blue-500' : 'hover:bg-button-orange'} hover:text-white text-semibold`} onClick={
                    currentQuestion + 1 === questions.length
                      ? handleSubmitButton
                      : nextSlide
                  }>
                    {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                  </button>
                </div>
              </>
            )}
          </div>
        )
      )}
    </>
  );
}