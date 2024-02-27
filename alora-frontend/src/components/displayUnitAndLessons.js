import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { listLessons } from '../actions/lessonActions'

function DisplayUnitAndLessons ({number, name}) {
    // const [lessons, setLessons] = useState([])
    const dispatch = useDispatch()
    const lessonList = useSelector(state => state.lessonList)
    const {error, loading, lessons} = lessonList

    useEffect(() => {
        dispatch(listLessons(number))
    
    },[dispatch, number])

    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-3">
                <div className="h-32 rounded-3xl lg:col-span-2 Unit-display-lesson"> 
                    <div className="py-10 px-10 text-3xl">
                    Unit {number}: {name}
                    </div>
                </div>
                <div className="h-32">image</div>
            </div>

            {lessons.map((lesson) => {
                return(
                    < div key = { lesson.id } className = "py-2" >                    
                        <div className="grid grid-cols-1 rounded-3xl Unit-display-lesson">
                            <Link to={`/unit/${number}/lesson/${lesson.lesson_num}/${lesson.id}`}>
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-5">
                                    <div className="grid grid-rows-4 h-32">
                                        <div className="text-2xl font-sans">Lesson {lesson.lesson_num}: {lesson.name}</div>
                                        <div>Learn</div>
                                        <div>Video One Description</div>
                                        <div>Video Two Description</div>
                                    </div>
                                    <div className="grid grid-rows-2 h-32">
                                        <div>Practice</div>
                                        <div className="text-center rounded-3xl Unit-display-lesson">
                                            Quiz
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div >
                )
            })}
                
        </>
    )
}

export default DisplayUnitAndLessons