import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { listQuizzes } from '../../actions/quizAction'

export default function LessonsQuiz() {
  //All of this for fetching the data and intializing the website
  const [current, setCurrent] = useState(0)
  const [questions, setQuestions] = useState([])
  const { rlid } = useParams()
  const dispatch = useDispatch()
  const quizList = useSelector(state => state.quizList)
  const { error, loading, quiz } = quizList

  useEffect(() => {
    dispatch(listQuizzes(rlid))
  }, [dispatch, rlid])

  //Derefences quiz and puts in in questions for easier readibility, very inefficient
  useEffect(() => {
    if (quiz && quiz.length > 0) {
      // Access elements of the array here
      setQuestions(quiz[0].question_answer)
    }
  }, [quiz]) // Run this effect whenever 'quiz' changes

  //////////////////////////////////////////////////////////

  const [selectedOptions, setSelectedOptions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [clickedIndices, setClickedIndices] = useState(Array(questions.length).fill(null))
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  //For setting the score at the end with submit
  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_option === selectedOptions[i]?.answerByUser) {
        newScore += 1
      }
    }
    setScore(newScore)
    setShowScore(true)
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
          <div className="overflow-hidden relative">
            {showScore ? (
              <div className="flex w-full bg-gray-100 bottom-0 max-w-screen-xl mx-auto h-40 border-2">
                You scored {score} out of {questions.length}
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
                  <div className="flex flex-col w-full max-w-screen">
                    <div>Question {currentQuestion + 1} of {questions.length}</div>
                    <div>{questions[currentQuestion].question}</div>
                    <div className="flex justify-center grid grid-cols-2 gap-4">
                      {questions.length > 0 &&
                        questions[currentQuestion].choices.map((choice, index) => (
                          <button
                            key={index}
                            className={`flex items-center py-4 pl-5 space-x-2 border-2 ${clickedIndices[currentQuestion] === index
                              ? 'bg-blue-500 text-white'
                              : 'bg-white/5 border-white/10'
                              } rounded-xl w-full h-20`}
                            onClick={() => handleButtonClick(index)}
                          >
                            {choice}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="h-full w-full justify-between items-center flex px-10 text-3xl">
                  <button onClick={previousSlide}>
                    back
                  </button>
                  <button onClick={
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