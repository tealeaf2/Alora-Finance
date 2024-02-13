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

    useEffect(() => {
        dispatch(listLessonDetails(uid, lid))
    }, [dispatch, uid, lid])

    return (
        <>
            <Header />
            <div className="flex justify-between">
                <Sidebar />
                <div className="mx-auto flex-grow mx-auto">

                    <LessonVideo lesson={lesson} />
                    <LessonsQuiz/>

                    <Footer/>
                </div>

            </div>
        </>
    )
}

