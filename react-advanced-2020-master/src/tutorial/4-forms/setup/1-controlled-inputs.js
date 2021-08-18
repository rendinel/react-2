import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    // we need to call the preventdefault method otherwise on every submit react will rerender the page
    e.preventDefault()
    console.log('helloworld')
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            {/* the normal for in react became like this,inside here we put the id of the input we are looking for */}
            <label htmlFor='firstName'>Name:</label>
            <input type='text' id='firstName' name='firstName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' />
          </div>
          {/* we can either place the function with onSubmit on the form or onclick on the button */}
          <button type='submit'>Add Person</button>
          {/* <button type='submit' onClick={handleSubmit}> */}
          {/* Add Person */}
          {/* </button> */}
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
