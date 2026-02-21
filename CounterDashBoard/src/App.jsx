import { useState } from 'react'
import './App.css'
import ButtonBoard from './components/ButtonBoard'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1);

  return (
    <>
      <Display count={count} step={step}/>
      <ButtonBoard count={count} setCount={setCount} step={step} setStep={setStep}/>
    </>
  )
}

export default App
