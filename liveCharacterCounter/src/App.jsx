import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter count={count}/>
      <Input count={count} setCount={setCount} />
    </>
  )
}

export default App
