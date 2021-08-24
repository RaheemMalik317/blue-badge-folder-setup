import React, { useState, useEffect } from 'react';
const UseEffectPractice =(props) =>{
    const [animal, setAnimal] = useState("alligator"); //usf

const [isPredator, setIsPredator] = useState(undefined);

    const handleClick = () =>{
        setAnimal("Monkey")
    }

    useEffect(() => {
       console.log(animal);

       switch(animal){
case "Monkey":
    setIsPredator(false)
    break;
    case "alligator":
        setIsPredator(true)
        break;
        default:
            setIsPredator(undefined)
            
       }
       // This useEffect should only run when animal has changed
       // Use a switch to determine if the animal is a predator or not.

       // Example: Case is a Monkey you need to change the value of isPredator to false...  Make a case for the alligator and change the value to isPredator to true.
       //default is undefined.
    }, [animal]); //uef
   

    return(
        <div>
            <p>The current animal is {animal} and isPreadtor is set to{""} {isPredator?.toString() ?? "undefined"}</p> 
            <button onClick={handleClick}>Click to Change Animal</button>
            {/* <button onClick={()=>setIsPredator(!isPredator)}>Change isPreadtor</button> */}
        </div>
    )
}

export default UseEffectPractice;
