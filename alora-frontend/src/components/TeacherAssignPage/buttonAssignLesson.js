import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { assignLesson } from '../../redux/actions/lessonActions'


export default function ButtonAssignLesson({ lid, dateAvailable, dateDue, classId }) {
    const dispatch = useDispatch()

    const handleAssignLesson = () => {
        dispatch(assignLesson(lid, dateAvailable, dateDue, classId))
    }

    return (
        <>
            <div className="flex inline-flex items-center justify-center sm:space-x-5 space-x-1 py-5">
                <button className="w-28 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 border-2 border-orange-400 hover:border-transparent rounded-3xl"
                    onClick={handleAssignLesson}
                >
                    Assign
                </button>
            </div>
        </>
    )
}