import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LessonVideo from '../components/LessonPage/lessonVideo'

import Header from '../global/Header';
import Sidebar from '../components/LessonPage/lessonsPageSideBar'
import Footer from '../components/LessonPage/lessonsFooter'
import LessonsQuiz from '../components/LessonPage/lessonsQuiz';


import { listLessonDetails } from '../actions/lessonActions'

// match is the object that contains info on how route matches with url (e.g id)
export default function Lesson() {

    const { uid, lid } = useParams()
    const dispatch = useDispatch()
    const lessonDetails = useSelector(state => state.lessonDetails)
    const { error, loading, lesson } = lessonDetails

    // For resetting selected quiz options when unit_num and/or lesson_num changes. (Otherwise answers will carry over when next/previous lesson buttons are clicked)
    const [resetSelectedOptions, setResetSelectedOptions] = useState(false);

    useEffect(() => {
        dispatch(listLessonDetails(uid, lid));
        setResetSelectedOptions(false); // reset the flag after resetting selectedOptions
    }, [dispatch, uid, lid, resetSelectedOptions]);

    return (
        <>
            <Header />
            <div className="flex">
                {/* <div className="flex"> */}
                    <Sidebar/>
                {/* </div> */}
                <div className="mx-auto w-3/4 lg:w-4/5">
                    <div className="p-8 sm:p-10 bg-gray-100 flex-grow">
                        <LessonVideo lesson={lesson} />
                        <LessonsQuiz resetSelectedOptions={resetSelectedOptions} />
                    </div>
                    <div className="p-8 sm:p-10 bg-white">
                        <Footer unit_num = {uid} lesson_num={lid} setResetSelectedOptions={setResetSelectedOptions}/>
                    </div>
                </div>
            </div>
        </>
    )
}

