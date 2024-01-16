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

// const async getValue = (e) => {
//     const uName = e.target.value;
//     console.log(uName);

//     const config = {
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }

//     const { data } = await axios.post(
//         '/api/users/login/',
//         { 'username': email, 'password': password },
//         config
//     )
// }

function NameInputButton() {
    // const [lessons, setLessons] = useState([])
    const dispatch = useDispatch()
    const treeList = useSelector(state => state.treeList)
    const {error, loading, names} = treeList



    console.log(names)

    useEffect(() => {
        dispatch(listTrees())
    
    },[dispatch])

    return (
        <>

            <form action="/your-name/" method="post">
                <label for="your_name">Your name: </label>
                {/* <input id="your_name" type="text" name="your_name" value="{{ current_name }}">
                <input type="submit" value="OK"> */}
            </form>

            <label for="Name">Enter your name: </label>
            <input type="text" 
            name = "fname"
            placeholder = "Your name"
            onChange =  { getValue } />
        </>
    )
}

export default NameInputButton;