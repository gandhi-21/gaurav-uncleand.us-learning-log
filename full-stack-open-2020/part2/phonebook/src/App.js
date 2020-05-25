import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])

    useEffect(() => {
        phonebook.getAll().then(response => {
            setPersons(response)
        }).catch(error => console.log(error))
    })

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App