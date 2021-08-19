import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  //to access the value we need to setup a usestate with an empty string as a initial value,then we pass the use state to the input on the value value={firstName} and then we setup a function where we change the empty value with the setFirstName to the e.target.value(it permit us to access the value we typed in)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    // we need to call the preventdefault method otherwise on every submit react will rerender the page
    //then we check if the 2 input aren't empty and create a new object person that have and id equal to the date we added the input and firstname and email from the input,then we use setPeople to change the value of people to be equal to people and person and we set the input to be empty again
    e.preventDefault()
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      }
      //it's the short version we can use if the key is also the value of the object like in this case
      // const person = { firstName, email }
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty value')
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            {/* the normal for in react became like this,inside here we put the id of the input we are looking for */}
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* we can either place the function with onSubmit on the form or onclick on the button */}
          <button type='submit'>Add Person</button>
          {/* <button type='submit' onClick={handleSubmit}> */}
          {/* Add Person */}
          {/* </button> */}
        </form>
        {/* we display the value from people we add to the object  */}
        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div>
              <div key={id} className='item'>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
