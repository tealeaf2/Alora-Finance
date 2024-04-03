import React, { useState , useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TopicsDisplay from './TopicsDisplay';
// import '../styles/index.css';
import Header from '../../../global/Header';

// This main page displays the topics on the side as well as the lessons that are assigned to the student

export default function LessonsMainPage() {
    const location = useLocation();
    const history = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/login';
    const accountLogin = useSelector(state => state.accountLogin);
    const { error, loading, accountInfo } = accountLogin;

    useEffect(() => {
        if (!accountInfo || accountInfo.account_type !== 'S') {
            history(redirect);
        }
    }, [accountInfo, redirect, history]);

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

