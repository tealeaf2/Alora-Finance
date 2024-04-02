import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TopicsDisplay from './TeacherTopicsDisplay';
// import '../styles/index.css';
import Header from '../../../global/Header';
import { listUnits } from '../../../redux/actions/unitActions';

export default function UnitsFromTopicPage({ topic }) {
    const dispatch = useDispatch();
    const { tid, tname } = useParams()
    const unitList = useSelector(state => state.unitList);
    const { error, loading, units } = unitList;

    useEffect(() => {
        dispatch(listUnits(tid));
    }, [dispatch, tid]);

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
                                        <Link to={`/teacher/lessons/topic/unit/${unit.unit_number}/${unit.unit_name}/${unit.id}`}>
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


