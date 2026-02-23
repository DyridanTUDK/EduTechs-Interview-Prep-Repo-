import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableDisplay from './components/TableDisplay'
import TaskCreator from './components/TaskCreator'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(
    {
      assigned: [],
      progress: [],
      done: [],
    }
  )

  return (
    <>
      <TaskCreator data={data} setData={setData}/>
      <TableDisplay data
      ={data} setData={setData} />
    </>
  )
}

export default App
