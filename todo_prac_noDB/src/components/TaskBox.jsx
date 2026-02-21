import React, { useEffect, useState } from 'react'
import Task from "./Task"
export default function TaskBox({list , setList}) {
    const [listItem, setListItme] = useState(()=>list.length!=0?list:[])

    return (
     <div className='h-[500px] flex flex-col items-center justify-start pt-5 bg-blue-200 mt-5 rounded-lg'>
      {list.length > 0 ? (
        list.map((data) => (
          <Task
          title={data.title}
          date={data.date}
          status={data.status}
          id={data.id}
          list = {list}
          setList={setList}
          />
        ))
      ) : (
        <div>No Task</div>
      )}
      </div>
  );
}