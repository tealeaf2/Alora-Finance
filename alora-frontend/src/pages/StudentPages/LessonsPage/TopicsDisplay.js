import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import '../styles/index.css';
import { listTopics } from '../../../redux/actions/topicActions';

export default function TopicsDisplay() {
    const dispatch = useDispatch();
    const topicList = useSelector(state => state.topicList);
    const { error, loading, topics } = topicList;

    useEffect(() => {
        dispatch(listTopics());
    }, [dispatch]);

    return (
        <>
            {loading ? <div>Loading</div>
                : error ? <div>error</div>
                    : (
                        <>
                            {/* LEFT SIDE BAR */}
                            <div className="flex flex-col justify-between px-10 py-6 border-r-4 border-gray text-center">
                                <Link to="/lessons/main">
                                    <div className="text-2xl h-20 w-60 mx-auto my-2">
                                        Alora Finance Lesson Overview
                                    </div>
                                </Link>
                                {/* Topic buttons on the side bar */}
                                {topics.map(topic => (
                                    <Link to={`/lessons/topic/${topic.id}/${topic.topic_name}`}>
                                        <div key={topic.id} className="py-2">
                                            <div
                                                className="grid py-8 px-4 h-10 w-60 place-content-center border-4 rounded-3xl text-lg App-header-sections-button3">
                                                {topic.topic_name}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                {/* Spacer to fill remaining space */}
                                <div className="flex-grow"></div>
                            </div>
                        </>
                    )}
        </>
    )
}