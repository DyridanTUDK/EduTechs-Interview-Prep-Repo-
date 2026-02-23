import { Input, Button, Flex } from 'antd'
import React, { useRef, useState } from 'react'

export default function TaskCreator({setData, data}) {
    const [Task, SetTask] = useState("")
    const [length, setLenght] = useState(0)
    const placeholderRef = useRef(null)

    const handleUpdate = (e) =>{
        const task_name = e.target.value
        setLenght(()=> e.target.value.length)
        return SetTask(task_name)
    }
    const sendTask = () =>{
        setData({...data, assigned:[...data.assigned, {assigned:Task, status:"assigned"}]})
         //this takes the html and does not causes any rerenders
        placeholderRef.current.input.value = " "
        SetTask(()=>   placeholderRef.current.input.value )
    }
  return (
    <div style={{display:"flex"}}>
        <Input ref={placeholderRef} onChange={handleUpdate} value={Task} placeholder='Enter your task'></Input>
        
        {length>0?
        <Button type='primary' onClick={sendTask}>Enter</Button>
        : 
        <Button type='danger'>Enter</Button>
        }
    </div>
)
}
