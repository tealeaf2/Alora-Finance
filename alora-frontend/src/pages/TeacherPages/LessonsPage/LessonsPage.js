import React from 'react'
import Header from '../../../global/Header';
import TopicsDisplay from './TeacherTopicsDisplay';

export default function LessonsPage () {
    return (
        <>
            <Header/>
            <div className="flex bg-white">
                {/* LEFT SIDE BAR */}
                <TopicsDisplay />
                {/* RIGHT SIDE BAR */}
                <div>Assigned Lessons</div>
            </div>
        </>
    )
}