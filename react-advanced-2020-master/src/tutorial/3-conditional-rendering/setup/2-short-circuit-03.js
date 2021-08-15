import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('ted')
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      <button onClick={() => setIsError(!isError)} className='btn'>
        toggle error
      </button>
      {isError ? <h1>Error...</h1> : <h1>Not Error...</h1>}
    </>
  )
}

export default ShortCircuit
