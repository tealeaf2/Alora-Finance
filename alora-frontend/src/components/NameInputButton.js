import { useState } from 'react';
import axios from 'axios';

 const NameInputButton = ()  => {

    const [currentVal, setVal] = useState(' ')
    
    //function to store name from input box
    const getValue = (e) => {
        setVal(e.target.value);
    }
    
    //function to output name (as a test, will be sent to django api later)
    const handleClick = () => {
        console.log(currentVal)
    }
    

    return (

    <>
        <label for="Name">Enter your name: </label>
        <input type="text" 
        name = "fname"
        placeholder = "Your name"
        onChange = { getValue }
        />
        <button type = 'submit' onClick = { handleClick }> Submit </button>
    </>
    )
}

export default NameInputButton;