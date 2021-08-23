import React, { useState, useReducer } from 'react'
import Modal from './Modal-2'
import { data } from '../../../data'
// import { reducer } from './reducer'
// reducer function
const reducer = (state, action) => {
  console.log(state)
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return { ...state, people: newPeople }
  }
  throw new Error('no matching action type')
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
}
const Index = () => {
  const [name, setName] = useState('')
  //dispatch it's a common we can call it like we prefer,use reducer return the statevalue and the function dispatch
  //the initial value it's always the reducer function that will modify the second value that is our default value
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              Delete
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
