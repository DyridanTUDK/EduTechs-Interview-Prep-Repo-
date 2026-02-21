import React from 'react'

export default function Display({count, step}) {
  return (
    <>
    <h1 style={{textAlign:"center"}}>{count}</h1>
    <span>Current Step: {step}</span>
    </>
  )
}
