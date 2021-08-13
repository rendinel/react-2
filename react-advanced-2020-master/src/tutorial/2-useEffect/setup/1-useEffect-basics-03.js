import React, { useState, useEffect } from 'react'

// cleanup function

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  // by default runs after every re-render,every time we render the component the code inside useEffect will run,every time we click the button we will update the value in the title of the document(finestrella nella scheda del browser),we cant run the useEffect inside a conditional,but we can place a conditional inside the useEffect
  // second parameter we can add it after the useEffect it's an array and if will leave it empty it will run only after the first render, if we want it ro run every time the value it's updated we need to pass the value as a parameter inside  the array
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  useEffect(() => {
    alert('hello')
  }, [])
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
