import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../global/Header';
import LessonInformation from '../../../components/TeacherAssignPage/lessonInformation'
import ButtonAssignLesson from '../../../components/TeacherAssignPage/buttonAssignLesson'
import ButtonDeleteLesson from '../../../components/TeacherAssignPage/buttonDeleteLesson'
import { listTeacherClassIds } from '../../../redux/actions/lessonActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TeacherAssignPage() {
    const [dateAvailable, setDateAvailable] = useState(new Date());
    const [classId, setClassId] = useState(0);
    const [dateDue, setDateDue] = useState(new Date());
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useNavigate()
    const redirect = location.search ? location.search.split('=')[1] : '/login';
    const { uid, lid } = useParams();
    const accountLogin = useSelector(state => state.accountLogin);
    const teacherClassIds = useSelector(state => state.teacherClassIds);
    const { error, loading, classIds } = teacherClassIds;
    const { accountInfo } = accountLogin;

    useEffect(() => {
        if (!accountInfo){
        history(redirect)
        }
        else if (accountInfo && accountInfo.account_type !== 'T') {
        history(redirect)
        }
    }, [accountInfo, redirect, history])

    useEffect(() => {
        if (classIds.length > 0) {
            setClassId(classIds[0].class_id)
        }
    }, [classIds])

    const handleAvailableDateChange = date => {
        setDateAvailable(date);
    };
    const handleDueDateChange = date => {
        setDateDue(date);
    };

    return (
        <>
            <Header />
            <Link to="/teacher/lessons/main" className="text-2xl p-5">
                Back to Lessons
            </Link>
            <div className="bg-white flex flex-col">
                <div className="flex-grow w-full max-h-screen max-w-screen-xl mx-auto px-10 py-5">
                    <LessonInformation />
                </div>
                <div className="flex-grow w-full max-h-screen max-w-screen-xl mx-auto px-10 py-5 rounded-3xl Unit-display-lesson text-2xl">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <div className="rounded-lg flex items-center">
                            <span className="mr-2 font-bold">Available Date:</span>
                            <div className="flex items-center">
                                <DatePicker
                                    selected={dateAvailable}
                                    onChange={handleAvailableDateChange}
                                    className="px-3 border-4 rounded-3xl border-neutral-400/60 text-neutral-400"
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                            </div>
                        </div>
                        <div className="rounded-lg flex items-center pb-5">
                            <span className="mr-2 font-bold">Due Date:</span>
                            <div className="flex items-center">
                                <DatePicker
                                    selected={dateDue}
                                    onChange={handleDueDateChange}
                                    className="px-3 border-4 rounded-3xl border-neutral-400/60 text-neutral-400"
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-4 rounded-3xl border-neutral-400/60 text-neutral-400">
                        <select
                            value={classId}
                            onChange={e => setClassId(e.target.value)}>
                            <option value="" disabled hidden>
                                Select Class
                            </option>
                            {classIds.map(classItem => (
                                <option key={classItem.id} value={classItem.class_id}>
                                    {classItem.class_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <ButtonAssignLesson
                    dateAvailable={dateAvailable.toISOString()}
                    dateDue={dateDue.toISOString()}
                    classId={classId}
                    lid={lid}
                />
                <ButtonDeleteLesson
                    classId={classId}
                    lid={lid}
                />
            </div>
        </>
    );
}
