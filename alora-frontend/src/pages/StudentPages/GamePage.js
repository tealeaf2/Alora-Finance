import React, { useState , useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../global/Header';
import GameChoice from '../../components/gameChoice'

export default function Games() {


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
            <Header/>
            <GameChoice/>
        </>
    )
}

