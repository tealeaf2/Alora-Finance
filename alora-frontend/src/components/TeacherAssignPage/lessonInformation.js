import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { listLessonDetails } from '../../redux/actions/lessonActions'

export default function LessonInformation() {
    const dispatch = useDispatch()
    const { uid, lid } = useParams()

    const lessonDetails = useSelector(state => state.lessonDetails)
    const { error, loading, lesson } = lessonDetails

    useEffect(() => {
        dispatch(listLessonDetails(uid, lid))
    }, [dispatch, uid, lid])

    return (
        <>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>error</div>
            ) : (
                <div className="flex grid grid-cols-1 gap-4 lg:grid-cols-2 items-start rounded-3xl Unit-display-lesson">
                <div className="py-3 pl-2 text-3xl">
                    Unit {lesson.unit_id}: {lesson.unit_name}
                </div>
                <div className="py-3 pl-2 text-3xl">
                    Lesson {lesson.lesson_num}: {lesson.lesson_name}
                </div>
                </div>
            )}
        </>
    )
}