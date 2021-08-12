import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  const changeMessage = () => {
    //we need to use spread operator so we leave the person value(name age) in the way they are then we override the value we want message in this case, if we don't use spread operator we will override everything writing only hello world
    setPerson({ ...person, message: 'hello world' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        New Message
      </button>
    </>
  )
}

export default UseStateObject
