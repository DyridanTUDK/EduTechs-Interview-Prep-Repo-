import React from 'react'

export default function Input({count, setCount}) {
    const handleCharacterIncrease = (e) =>{
        const value = e.target.value.length
        setCount(count => value)
    }
  return (
    <div>
        <h1>Character Checker:</h1>
        <label htmlFor="">
            <textarea onChange={handleCharacterIncrease} name="" id="" rows={5} cols={50}>
            </textarea>
        </label>
    </div>
  )
}
