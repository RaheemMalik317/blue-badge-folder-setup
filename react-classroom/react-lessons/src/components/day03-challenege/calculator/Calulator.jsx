import React, { useState } from 'react'; //sfc

const Calculator = (props) => {


const [number1, setNumber1] = useState(0);
const [number2, setNumber2] = useState(0);
const [calculateTotal, setCalculateTotal] = useState(0);

function handleOnChangeNumber1(e){
    setNumber1(+e.target.value) //it will treat this as a number or percent if it can (Number(e.target.value))
}


function handeleOnChangeNumber2(e){
    setNumber2(+e.target.value)
}

function handleClick(){
    setCalculateTotal(number1 + number2)
}

return(
    <div>
        <p>Hello from Calculator</p>
        <input type="number" name="number 1" id="" value={number1} onChange={handleOnChangeNumber1}/>
        <input type="number" name="number 2" id="" value={number2} onChange={handeleOnChangeNumber2}/>
        <button onClick={handleClick}>Click for Total</button>
        <h2>Total: {calculateTotal}</h2>
    </div>
)

}

export default Calculator