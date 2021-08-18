import React, { useState } from 'react';
//imrs


const InputField = (props) => {
        const [username, setUsername] = useState("");//usf



    function handleOnChange(e) {
        console.log("handleOnChange was called.");
    // username = event.target.value *** Dont not do this
    setUsername(e.target.value)
         

        console.log(e.target.value);
    }

    return ( 
        <div>
            <p>
                Hello from InputField
            </p>
            <input type="text" value={username} onChange={handleOnChange}/>
        </div>
     );
}
 
export default InputField;