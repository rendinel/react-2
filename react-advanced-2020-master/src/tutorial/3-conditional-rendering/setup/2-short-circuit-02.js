import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(' ')
  //if text is not empty so it's true it will return the first value
  const firstValue = text || 'hello world'
  //if text is not empty so it's true it will return the second value
  const secondValue = text && 'hello world'
  console.log(secondValue)
  return (
    <>
      {/* if text is true will return text otherwise john doe */}
      <h1>{text || 'john doe'}</h1>
      {/* if text is true it will return hello {text} otherwise nothing */}
      {text && <h2>hello {text} </h2>}
      {/* if the condition is true it will return the value otherwise it will return nothing */}
      {!text && <h2>Not hello {text} </h2>}
    </>
  )
}

export default ShortCircuit
