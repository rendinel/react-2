import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  //we set up an empty object and the set to update it
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  //we set up the an empty array and the set to modify it
  const [people, setPeople] = useState([])

  // we update the object in a dinamic way, we pick up the name and the value and add to the object , every name will be a key and evry value will be the value, this way we can update multiple key value with only one function
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  //we call the preventdefault so tha page doesen't rerender every time we update,we check if the input aren't empty
  //we setup a newperson object that is equall to our person object plus and id that generateed relate dto the date and moment we insert the object
  //we update the people array adding to it the newpersonobject and we setup the input to be empty again
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
              <p>{id}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
