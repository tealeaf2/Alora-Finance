import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../global/Header';


import { listLessonDetails } from '../actions/lessonActions'

// match is the object that contains info on how route matches with url (e.g id)
export default function Lesson() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const lessonDetails = useSelector(state => state.lessonDetails)
    const {error, loading, lesson} = lessonDetails

    console.log(lesson)

    useEffect(() => {
        dispatch(listLessonDetails(id))
    },[id, dispatch])


    // const dispatch = useDispatch()
    // const unitList = useSelector(state => state.unitList)
    // const {error, loading, units} = unitList

    // const [unit, setUnit] = useState({})
    // const [home, setHome] = useState(false)

    // console.log(unit)
    

    // // const [units, setUnits] = useState([])

    // useEffect(() => {
    //     dispatch(listUnits())
    // },[dispatch])

    return (
        <>
            <Header/>
            <div className="flex justify-between bg-white">
                {/* LEFT SIDE BAR */}
                <div className="px-10 h-screen py-6 border-r-4 border-gray text-center">
                    <button className="text-2xl h-20 w-60 mx-auto my-2"
                        
                    >
                        Alora Finance Image and Progress
                    </button>

                    {/* {units.map(unit => (
                        <div key={unit.id} 
                            className="py-2"
                        >
                            <UnitDisplaySmall unit={unit} />
                        </div>
                    ))} */}
                </div>
                        
                        
                {/* RIGHT SIDE BAR */}
                <div className="flex-grow max-w-screen-xl mx-auto p-6">

                    <div key={lesson.id} className="py-2">
                        <div className="grid grid-cols-1 rounded-3xl Unit-display-lesson">
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 p-5">
                                    <div className="grid grid-rows-3 h-32">
                                        <div class="text-2xl font-sans">Lesson {lesson.lesson_num}: {lesson.name}</div>
                                        <div>Video + Script</div>
                                        <div className="text-center rounded-3xl Unit-display-lesson">
                                            Quiz
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    <div>Previous + Next</div>
                </div>
            </div>

        </>
    )
}

