import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  //we need to set up a cleanupfunction that reset the useeffect everytime we render,otherwise the useeffect will run at every render,
  //it's very important to make things appear disappear from the screen
  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
