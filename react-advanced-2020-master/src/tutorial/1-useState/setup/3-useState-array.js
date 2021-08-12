import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  // instead of import React, { useState } from 'react' we can write it like this
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])} className='btn'>
        Clear Items
      </button>
    </>
  )
}

export default UseStateArray
