import React, { useEffect, useState } from 'react';
import TopicsDisplay from './TopicsDisplay';
// import '../styles/index.css';
import Header from '../../../global/Header';

// This main page displays the topics on the side as well as the lessons that are assigned to the student

export default function LessonsMainPage() {
    return (
        <>
            <Header />
            <div className="flex bg-white">
                {/* LEFT SIDE BAR */}
                <TopicsDisplay />
                {/* RIGHT SIDE BAR */}
                <div>Assignments Due</div>
            </div>
        </>
    );
}

