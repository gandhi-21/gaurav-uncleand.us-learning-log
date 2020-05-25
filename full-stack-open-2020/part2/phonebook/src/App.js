import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null)

    useEffect(() => {
        phonebook.getAll().then(response => {
            setPersons(response)
        }).catch(error => console.log(error))
    }, [])

    setTimeout(
        () => {
            setNotification(null)
        },
        5000
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setNotification={setNotification} setPersons={setPersons}/>
    </div>
  )
}

export default App