import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Header from '../../../global/Header'
import TopicsDisplay from './TeacherTopicsDisplay'
import { listLessons } from '../../../redux/actions/lessonActions'

function LessonsFromUnitPage() {

    const location = useLocation();
    const history = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/login';
    const accountLogin = useSelector(state => state.accountLogin);
    const { error_, loading_, accountInfo } = accountLogin;

    // const [lessons, setLessons] = useState([])
    const dispatch = useDispatch()
    const { uid, uname, urid } = useParams()
    const lessonList = useSelector(state => state.lessonList)
    const { error, loading, lessons } = lessonList

    useEffect(() => {
        if (!accountInfo){
            history(redirect)
        }
        else if (accountInfo && accountInfo.account_type !== 'T') {
        history(redirect)
        }

        dispatch(listLessons(urid))

    }, [dispatch, urid, accountInfo, redirect, history])

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
                        <div className="flex-grow max-w-screen-xl mx-auto p-6">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-3">
                                <div className="h-32 rounded-3xl lg:col-span-2 Unit-display-lesson">
                                    <div className="py-10 px-10 text-3xl">
                                        Unit {uid}: {uname}
                                    </div>
                                </div>
                            </div>
                            {lessons.map((lesson) => (
                                <div key={lesson.lesson_num} className="py-2">
                                    <div className="flex items-start rounded-3xl Unit-display-lesson">
                                        <Link to={`/teacher/lesson/${uid}/${lesson.lesson_num}/assign`} className="w-full">
                                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-5">
                                                <div className="flex flex-col w-full p-5">
                                                    <div className="text-2xl font-sans">Lesson {lesson.lesson_num}: {lesson.lesson_name}</div>
                                                    <div>Description</div>
                                                    <div>Date Due</div>
                                                    <div>Students Completed</div>
                                                </div>
                                                <div className="flex flex-col items-center justify-between mt-auto">
                                                    <div className="text-center rounded-3xl Unit-display-lesson">
                                                        Assign
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default LessonsFromUnitPage