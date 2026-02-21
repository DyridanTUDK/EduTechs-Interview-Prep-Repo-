import { useState } from 'react'
import './App.css'
import InputBar from './components/InputBar'
import TaskBox from './components/TaskBox'
import Page from './layout/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-center bg-slate-400 text-white font-bold py-2'>Todo App</h1>
      <Page/>
    </>
  )
}

export default App
