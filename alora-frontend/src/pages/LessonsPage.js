import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import Header from '../global/Header';
import UnitDisplaySmall from '../components/unitDisplaySmall';
import DisplayUnitAndLessons from '../components/displayUnitAndLessons'
import {units} from './data';

export default function Lessons() {
    const [home, setHome] = useState(false)
    const [Id, setId] = useState(0)
    const [unitName, setUnitName] = useState('')

    return (
        <>
            <Header/>
            <div className="flex justify-between bg-white">
                <div className="px-10 h-screen py-6 border-r-4 border-gray text-center">
                    <button className="text-2xl h-20 w-60 mx-auto my-2"
                        onClick={() => setHome(false)}
                    >
                        Alora Finance Lesson Overview
                    </button>

                    {units.map(unit => (
                        <div key={unit._id} 
                            className="py-2"
                        >
                            <UnitDisplaySmall unit={unit} />
                        </div>
                    ))}
                </div>
                        
                        
                <div className="flex-grow max-w-screen-xl mx-auto p-6">
                    {home ? <DisplayUnitAndLessons id={Id} name={unitName} />
                        :
                        <div className="max-h-screen overflow-y-auto max-w-screen-xl mx-auto px-10 py-5">
                            {units.map(unit => (
                                <div key={unit._id} className="py-2">
                                    <button
                                        className="text-left py-10 px-10 rounded-3xl w-full text-3xl App-header-sections-button3"
                                        onClick={() => {
                                            setHome(true)
                                            setId(unit._id)
                                            setUnitName(unit.unit_name)
                                        }}>
                                        Unit {unit._id}: {unit.unit_name}
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

