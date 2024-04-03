import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import TopicsDisplay from './TopicsDisplay';
// import '../styles/index.css';
import Header from '../../../global/Header';
import { listUnits } from '../../../redux/actions/unitActions';

export default function UnitsFromTopicPage({ topic }) {
    const location = useLocation();
    const history = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/login';
    const accountLogin = useSelector(state => state.accountLogin);
    const { _error, _loading, accountInfo } = accountLogin;

    const dispatch = useDispatch();
    const { tid, tname } = useParams()
    const unitList = useSelector(state => state.unitList);
    const { error, loading, units } = unitList;

    useEffect(() => {
        dispatch(listUnits(tid));
    }, [dispatch, tid]);

    useEffect(() => {
        if (!accountInfo || accountInfo.account_type !== 'S') {
            history(redirect);
        }
        
        dispatch(listUnits(tid));

    }, [dispatch, tid, accountInfo, redirect, history])

    return (
        <>
            {loading ? <div>Loading</div>
                : error ? <div>error</div>
                    : (
                        <>
                            <Header />
                            <div className="flex bg-white">
                                {/* LEFT SIDE BAR */}
                                <TopicsDisplay />
                                {/* RIGHT SIDE BAR */}
                                <div className="flex-grow w-full max-h-screen max-w-screen-xl mx-auto px-10 py-5">
                                    <div className="py-5 pl-2 text-3xl">
                                        Topic: {tname}
                                    </div>
                                    {units.map(unit => (
                                        <Link to={`/lessons/topic/unit/${unit.unit_number}/${unit.unit_name}/${unit.id}`}>
                                            <div key={unit.id} className="py-2">
                                                <div
                                                    className="text-left py-10 px-10 rounded-3xl text-3xl App-header-sections-button3"
                                                >
                                                    Unit {unit.unit_number}: {unit.unit_name}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {/* Spacer to fill remaining space */}
                                <div className="flex-grow"></div>
                            </div>
                        </>
                    )}
        </>)
}


