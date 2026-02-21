import React, { useEffect, useState } from 'react'

export default function Counter({count}) {
    const test = count >= 200 ? "red"
    : count >= 100 ? "orange"
    :"white"
    return (
    <>
        <h1>Current Count: <span style={{color:test}}>{count}</span></h1>
    </>
  )
}
