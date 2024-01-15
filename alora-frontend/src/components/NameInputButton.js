import React from 'react';
import axios from 'axios';

//function to store name from input box
const getValue = (e) => {
    const uName = e.target.value;
    console.log(uName);
}

 const NameInputButton = ()  => {
    return (
    <>
        <label for="Name">Enter your name: </label>
        <input type="text" 
        name = "fname"
        placeholder = "Your name"
        onChange =  { getValue } />
    </>
    )
}

export default NameInputButton;