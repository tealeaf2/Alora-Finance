// import React from 'react';
// import axios from 'axios';

// //function to store name from input box
// const getValue = (e) => {
//     const uName = e.target.value;
//     console.log(uName);
// }

//  const NameInputButton = ()  => {
//     return (
//     <>
//         <label for="Name">Enter your name: </label>
//         <input type="text" 
//         name = "fname"
//         placeholder = "Your name"
//         onChange =  { getValue } />
//     </>
//     )
// }

// export default NameInputButton;


import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios';


import { listTrees } from '../actions/treeActions'

const NameInputButton = () => {
    // const [lessons, setLessons] = useState([])
    const [name, setName] = useState(' ')
    const dispatch = useDispatch()
    const treeList = useSelector(state => state.treeList)
    const {error, loading, names} = treeList

    console.log(names)

    useEffect(() => {
        dispatch(listTrees())
    
    },[dispatch])

    const getName = (e) => {
        setName(e.target.value);
        console.log(name)
    }

    const handleClick = async () => {
        // console.log(currentVal)
        await axios.post(
            '/api/names/',
                {
                    'name':  name
                },
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
    }

    return (
        <>

            <form>
                <label for="Name">Enter your name: </label>
                <input type="text" 
                name = "fname"
                placeholder = "Your name"
                onChange =  { getName } />
                <button type = 'submit' onClick = { handleClick }> Submit </button>
            </form>

            
        </>
    )
}

export default NameInputButton;