import React, { useEffect, useState } from 'react'
import './Main.css'
export default function Main() {
    const [displayData, setDisplayData] = useState('')
    const [total, setTotal]= useState(0)
    const [values, setValues]= useState([])
    const [operation, setOperation]= useState('')
    const [newValues, setNewValues]= useState()

    // button actions
    //console.log(values);
    function calculate(num1, num2, operation) {
        switch(operation) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case 'x':
            return num1 * num2;
          case '/':
            return num1 / num2;
          default:
            return 0;
        }
      }
      
    useEffect(()=>{
values.map((elem)=>{
    if(operation == '/'){
        setNewValues(elem)
        console.log(elem);
    }
   
})
    },[values])

    const handleC = () => {
        setDisplayData('')
    }
    const handleClear = () => {
        setDisplayData('');
        setTotal(0);
        setValues([]);
        setOperation('');
        setNewValues();
      }
    const handlePercent = () => {
        setDisplayData([...displayData, "%"])
    }

    const handleDivide = () => {
        setDisplayData([...displayData, "/"])
       setOperation('/')
      
    }
    const handleSeven = () => {
        setDisplayData([...displayData, "7"])
        setValues([7])
    }
    const handleEight = () => {
        setDisplayData([...displayData, "8"])
        setValues([8])
    }
    const handleNine = () => {
        setDisplayData([...displayData, "9"])
    }
    const handleMulti = () => {
        setDisplayData([...displayData, "x"])
    }
    const handleFour = () => {
        setDisplayData([...displayData, "4"])
    }
    const handleFive = () => {
        setDisplayData([...displayData, "5"])
    }

    const handleSix = () => {
        setDisplayData([...displayData, "6"])
    }

    const handleMinus = () => {
        setDisplayData([...displayData, "-"])
    }
    const handleOne = () => {
        setDisplayData([...displayData, "1"])
    }

    const handleTwo = () => {
        setDisplayData([...displayData, "2"])
    }
    const handleThree = () => {
        setDisplayData([...displayData, "3"])
    }
    const handlePlus = () => {
        setDisplayData([...displayData, "+"])
    }
    const handleZero = () => {
        setDisplayData([...displayData, "0"])
    }
    const handleDot = () => {
        setDisplayData([...displayData, "."])
    }
    const handleEqual = () => {
        const displayString = displayData.join('');
        const numArr = displayString.split(/[\+\-\x\/]/g).map(Number);
        const opArr = displayString.split('').filter(c => ['+', '-', 'x', '/'].includes(c));
      
        let result = numArr[0];
        for(let i = 0; i < opArr.length; i++) {
          result = calculate(result, numArr[i+1], opArr[i]);
        }
      
        setDisplayData([...displayData, ` = ${result}`]);
        setTotal(result);
      }
      

    return (
        <div className='container'>
            <div className='displayData'>
               
                {
                   displayData && displayData.map((elem)=>{
                    return(
                        <div >
                           <p >{elem}</p>
                        </div>
                    )
                    })
                }
            </div>
            <div className='numberContaniner'>
                <button onClick={handleC}>C</button>
                <button onClick={handleClear}>+/-</button>
                <button onClick={handlePercent}>%</button>
                <button onClick={handleDivide}>÷</button>
                <button onClick={handleSeven}>7</button>
                <button onClick={handleEight}>8</button>
                <button onClick={handleNine}>9</button>
                <button onClick={handleMulti}>x</button>
                <button onClick={handleFour}>4</button>
                <button onClick={handleFive}>5</button>
                <button onClick={handleSix}>6</button>
                <button onClick={handleMinus}>-</button>
                <button onClick={handleOne}>1</button>
                <button onClick={handleTwo}>2</button>
                <button onClick={handleThree}>3</button>
                <button onClick={handlePlus}>+</button>
                <button onClick={handleZero}>0</button>
                <button onClick={handleDot}>.</button>
                <button onClick={handleEqual}>=</button>
            </div>
        </div>
    )
}
