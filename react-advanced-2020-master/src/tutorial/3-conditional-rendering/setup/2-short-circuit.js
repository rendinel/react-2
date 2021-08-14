import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('k')
  //if text is not empty so it's true it will return the first value
  const firstValue = text || 'hello world'
  //if text is not empty so it's true it will return the second value
  const secondValue = text && 'hello world'
  console.log(secondValue)
  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1>
    </>
  )
}

export default ShortCircuit
