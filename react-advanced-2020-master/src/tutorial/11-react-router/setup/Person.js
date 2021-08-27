import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
//{4} we import links and useparams from react router
import { Link, useParams } from 'react-router-dom'
const Person = () => {
  // {4}we set up a default name
  const [name, setName] = useState('default name')
  //{4 with useParams we grab the id we import from the path we defined in contest }
  const { id } = useParams()

  //{4} at the first render we are going to grab the person id equal to the id from the path but we need to parseint because it'a string and not a number and we set it to be our newName
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setName(newPerson.name)
  }, [])
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  )
}

export default Person
