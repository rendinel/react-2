import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
//we can access 2 components - Provider Consumer,it permit to pass a value to all the component inside the parent component, we need to wrap everything inside <PersonContext.Provider value={{ removePerson }}></PersonContext.Provider> passing as value the function or the data we need to pass
//then inside the component where we are going to use the value we need to deconstruct the value and set it to be equal to the contect we define const { removePerson } = useContext(PersonContext)

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context Api / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const { people } = useContext(PersonContext)
  //we don't need to deconstruct we can also access like this
  //const mainData = useContext(PersonContext)
  //but the we are going to map mainData.people.map
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
