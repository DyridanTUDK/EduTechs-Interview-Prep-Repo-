import React, { useEffect, useState } from 'react'
import { Table } from 'antd';


const columns = [
    {
        title: 'Assigned',
        dataIndex: 'assigned',

    },
    {
        title: 'progress',
        dataIndex: 'progress',

    },
    {
        title: 'done',
        dataIndex: 'done',

    },
];


export default function TableDisplay({ data, setData }) {

    const maxLen = Math.max(
    data.assigned.length,
    data.progress.length,
    data.done.length
    )

    const tableData = Array.from({ length: maxLen }, (_, i) => ({
    key: i,
    assigned: data.assigned[i]?.assigned || "",
    progress: data.progress[i]?.assigned || "",
    done: data.done[i]?.assigned || ""
    }))

  const moveTask = (_, rowIndex) => {
  setData(prev => {

    const next = {
      assigned:[...prev.assigned],
      progress:[...prev.progress],
      done:[...prev.done]
    }

    const columns = ["assigned","progress","done"]

    for(let i=0;i<columns.length;i++){
      const col = columns[i]

      if(next[col][rowIndex]){
        const task = next[col][rowIndex]

        next[col].splice(rowIndex,1)

        const nextCol = columns[i+1]
        if(nextCol) next[nextCol].push(task)

        break
      }
    }

    return next
  })
}

  return (
    <Table
      dataSource={tableData}
      columns={columns}
      onRow={(record,rowIndex)=>({
        onClick:()=>moveTask(record,rowIndex)
      })}
    />
  )
}