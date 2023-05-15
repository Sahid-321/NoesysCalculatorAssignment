import React, { useState } from 'react'
import './Main.css'
export default function Main() {
    const [displayData, setDisplayData] = useState('')
    const [total, setTotal]= useState('')
    // button actions
    console.log(displayData);
    const handleC = () => {
        setDisplayData('')
    }
    const handleClear = () => {

    }
    const handlePercent = () => {
        setDisplayData([...displayData, "%"])
    }

    const handleDivide = () => {
        setDisplayData([...displayData, "/"])
    }
    const handleSeven = () => {
        setDisplayData([...displayData, "7"])
    }
    const handleEight = () => {
        setDisplayData([...displayData, "8"])
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
        setDisplayData([...displayData, " = Total"])
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
