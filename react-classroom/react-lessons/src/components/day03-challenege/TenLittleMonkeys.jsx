// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentence that says the following... 
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey counter 
 
// Have useState
// Having a Button
// function that when called it will update the state of monkeys left
//Once ten monkeys = 0 we need to update our display  of text

import React, {useState} from "react";



const TenLittleMonkeys = (props) => {

    const [count, setCount] = useState(10)
    const [offBed, setOffBed] = useState(false)

    function handleClick(e) {
        console.log("10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!");
        setCount(count - 1)
        if (count - 1 == 0){
            setOffBed(true)
        }
    }

    return (  

        <div>
            <p>Hello from Monkeys</p>
            <button onClick = {handleClick} disabled={offBed}>Monkeys</button>
            <p> {count} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!</p>
            {count < 1 ? <p>All the Monkeys fell off the bed!</p> : <button onClick ={handleClick} >Click</button>}
            
        </div>
    );
}
 
export default TenLittleMonkeys;