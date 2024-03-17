import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function LessonsFooter({ unit_id, lesson, setResetSelectedOptions }) {
  const navigate = useNavigate()
  console.log(lesson.lesson_num, lesson.number_of_lessons)

  const goToPreviousLesson = () => {
    if (lesson.lesson_num > 1) {
      navigate(`/lesson/${unit_id}/${lesson.lesson_num - 1}/video-quiz`)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  const goToNextLesson = () => {
    if (lesson.lesson_num < lesson.number_of_lessons) {
      navigate(`/lesson/${unit_id}/${lesson.lesson_num + 1}/video-quiz`)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <footer className="w-full bottom-0">
      <div className="flex h-full w-full justify-between space-x-2 items-center text-xl sm:text-2xl font-semibold">
        <button
          className={`border-4 rounded-full text-center px-7 py-2 text-semibold ${lesson.lesson_num > 1 ? 'border-button-orange hover:bg-button-orange hover:text-white' : 'border-button-gray'}`}
          onClick={goToPreviousLesson}
          disabled={lesson.lesson_num === 1}
        >
          Previous Lesson
        </button>
        <button
          className={`border-4 rounded-full text-center px-7 py-2 text-semibold ${lesson.lesson_num < lesson.number_of_lessons ? 'border-button-orange hover:bg-button-orange hover:text-white' : 'border-button-gray'}`}
          onClick={goToNextLesson}
          disabled={lesson.lesson_num >= lesson.number_of_lessons}
        >
          Next Lesson
        </button>
      </div>
    </footer>
  )
}