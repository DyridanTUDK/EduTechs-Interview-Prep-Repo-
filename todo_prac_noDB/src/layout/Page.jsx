import React, { useState } from 'react'
import InputBar from '../components/InputBar'
import TaskBox from '../components/TaskBox'

export default function Page() {
    const [list, setList] = useState([])
    return (
    <>
        <InputBar list={list} setList={setList}/>
        <TaskBox list={list} setList={setList}/>
    </>
  )
}
