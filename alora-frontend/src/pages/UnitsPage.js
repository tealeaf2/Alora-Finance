import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


import Header from '../global/Header';
import UnitDisplaySmall from '../components/unitDisplaySmall';
import DisplayUnitAndLessons from '../components/displayUnitAndLessons'

import { listUnits } from '../actions/unitActions'

export default function Units() {
    const dispatch = useDispatch()
    const unitList = useSelector(state => state.unitList)
    const {error, loading, units} = unitList

    const [unit, setUnit] = useState({})
    const [home, setHome] = useState(false)
    

    // const [units, setUnits] = useState([])

    useEffect(() => {
        dispatch(listUnits())
    },[dispatch])


    // Check if unitList is undefined or still loading
    if (!unitList || unitList.loading) {
        // Return loading indicator or handle loading state
        return <div>Loading...</div>;
    }


    return (
        <>
            <Header/>
            <div className="flex justify-between bg-white">
                {/* LEFT SIDE BAR */}
                <div className="px-10 h-screen py-6 border-r-4 border-gray text-center">
                    <button className="text-2xl h-20 w-60 mx-auto my-2"
                        onClick={() => setHome(false)}
                    >
                        Alora Finance Lesson Overview
                    </button>

                    {units.map(unit => (
                        <div key={unit.id} 
                            className="py-2"
                        >
                            <UnitDisplaySmall unit={unit} />
                        </div>
                    ))}
                </div>
                        
                        
                {/* RIGHT SIDE BAR */}
                <div className="flex-grow max-w-screen-xl mx-auto p-6 max-h-screen overflow-auto">
                    {home ? <DisplayUnitAndLessons number={unit.number} name={unit.name} />
                        :
                        <div className="max-h-screen max-w-screen-xl mx-auto px-10 py-5">
                            {units.map(unit => (
                                <div key={unit._id} className="py-2">
                                    <button
                                        className="text-left py-10 px-10 rounded-3xl w-full text-3xl App-header-sections-button3"
                                        onClick={() => {
                                            setHome(true)
                                            setUnit(units[unit.number - 1])
                                        }}>
                                        Unit {unit.number}: {unit.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

