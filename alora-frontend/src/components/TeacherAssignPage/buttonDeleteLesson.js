import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteLesson } from '../../redux/actions/lessonActions'


export default function ButtonDeleteLesson({ lid, classId }) {
    const dispatch = useDispatch()

    console.log(classId)

    const handleDeleteLesson = () => {
        dispatch(deleteLesson(lid, classId))
    }

    return (
        <>
            <div className="flex inline-flex items-center justify-center sm:space-x-5 space-x-1 py-5">
                <button className="w-28 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 border-2 border-orange-400 hover:border-transparent rounded-3xl"
                    onClick={handleDeleteLesson}
                >
                    Delete
                </button>
            </div>
        </>
    )
}