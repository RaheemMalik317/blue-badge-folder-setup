import React, { useState } from 'react';

const ClickCounter = (props) => {
    //let count = 0
    const [count, setCount]= useState(0) 
    const [isDisabled, setIsDisabled] = useState(false)

function handleClick(e) {
    console.log("Button was clicked");
    setCount(count + 1)
    if (count + 1 === 10){
        setIsDisabled(true)
    }
    // console.log(count);
}
//usf
    return (
    <div> Hello from Click Counter
       <button onClick ={handleClick} disabled={isDisabled}>ClickMe</button>
        <p>Current Count: {count}</p>
        {count> 9 ? <p>You Clicked Too Many Times</p> : null} 
    </div> )
    
}
 
export default ClickCounter;

