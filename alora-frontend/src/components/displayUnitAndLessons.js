import React from 'react'
import {lessons} from '../pages/data'

function DisplayUnitAndLessons ({id, name}) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-3">
                <div className="h-32 rounded-3xl lg:col-span-2 Unit-display-lesson"> 
                    <div className="py-10 px-10 text-3xl">
                    Unit {id}: {name}
                    </div>
                </div>
                <div className="h-32">image</div>
            </div>

            {lessons.map((lesson) => {
                if (lesson.unit_id === id) {
                    return(
                        <div className="py-2">
                            <div className="grid grid-cols-1 rounded-3xl Unit-display-lesson">
                                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-5">
                                    <div class="grid grid-rows-4 h-32">
                                        <div>Topic {lesson.lesson_id}: {lesson.lesson_name}</div>
                                        <div>Learn</div>
                                        <div>Video One Description</div>
                                        <div>Video Two Description</div>
                                    </div>
                                    <div class="grid grid-rows-2 h-32">
                                        <div>Practice</div>
                                        <div className="text-center rounded-3xl Unit-display-lesson">
                                            Quiz
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default DisplayUnitAndLessons