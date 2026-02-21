import React from 'react'

export default function ButtonBoard({count,step, setCount, setStep}) {

    const onIncrement = () =>{
        setCount(count => count + step)
    }
    const onDecrement = () =>{
        if(!(count<=0)){
            setCount(count => count - step)
        }
    }

    const onReset = () =>{
        setStep(1)
        setCount(0)
    }

    const onStepIncrease = () =>{
        setStep(step => step + 1)
    }
  return (
    <div>
        <button style={{backgroundColor:"green"}} onClick={onIncrement}>Increment</button>
        {!(count===0)?<button style={{backgroundColor:"red"}} onClick={onDecrement}>Decrement</button>:<button style={{backgroundColor:"grey"}} >Decrement</button>}
        <button style={{backgroundColor:"yellow"}} onClick={onReset}>Reset</button>
        <button style={{backgroundColor:"darkorange"}} onClick={onStepIncrease}>+1 Step Increase</button>
    </div>
  )
}
