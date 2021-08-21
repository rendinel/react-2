import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    //this way we grab the value we submit from the input
    console.log(refContainer.current.value)
    //we can use to grab everything insdie the dom,in this case we are grabbing the div
    console.log(divContainer.current)
  }
  //it's an object with a key of current and the default value we choose null in this case (current:null)
  // console.log(refContainer)

  //because it doen't trigger the rerender we don't to pass the [], it will only work the first time the page load
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
        <div ref={divContainer}>hello world</div>
      </form>
    </>
  )
}

export default UseRefBasics
