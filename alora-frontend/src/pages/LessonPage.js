import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Header from '../global/Header';


import { listLessonDetails } from '../actions/lessonActions'

// match is the object that contains info on how route matches with url (e.g id)
export default function Lesson({ match }) {

    console.log(match)

    const dispatch = useDispatch()
    const lessonDetails = useSelector(state => state.lessonDetails)
    const {error, loading, lessons} = lessonDetails

    console.log(lessons)

    useEffect(() => {
        dispatch(listLessonDetails(match.params.id))
        
    
    },[dispatch])


    // const dispatch = useDispatch()
    // const unitList = useSelector(state => state.unitList)
    // const {error, loading, units} = unitList

    // const [unit, setUnit] = useState({})
    // const [home, setHome] = useState(false)

    // console.log(unit)
    

    // // const [units, setUnits] = useState([])

    // useEffect(() => {
    //     dispatch(listUnits())
    // },[dispatch])

    return (
        <>
            <Header/>

        </>
    )
}

