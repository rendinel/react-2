import React, { useState, useEffect } from 'react'

// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  // by default runs after every re-render,every time we render the component the code inside useeffect will run,every time we click the button we will update the value in the title of the document(finestrella nella scheda del browser)
  useEffect(() => {
    document.title = `New Messages(${value})`
  })
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
