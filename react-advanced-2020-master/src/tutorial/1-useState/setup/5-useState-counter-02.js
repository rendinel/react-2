import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      //if we put a function inside a function it will return the current value because of javascript asynchronism,
      //so every time we click we start from the current value
      // setValue(value + 1)
      //we need to pass the value as a parameter this way it will return the value right before the update
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button onClick={reset} className='btn'>
          Reset
        </button>
        <button onClick={() => setValue(value + 1)} className='btn'>
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
