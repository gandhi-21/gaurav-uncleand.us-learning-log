import React, { useState } from 'react'
import phonebook from '../services/phonebook'

const PersonForm = (props) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const name = newName
        const newPerson = {
            name: name,
            number: newNumber,
        }
        phonebook.create(newPerson)
            .then(response => {
                setNewNumber('')
                setNewName('')
                props.setNotification(`Added person ${newPerson.name}`)
                props.setPersons(props.persons.concat(response))
            })
            .catch(error => console.log(error))
    }

    const handlePersonChange = (event) => {
        event.preventDefault()
        const name = event.target.value
        setNewName(name)
    }

    const handleNumberChange = (event) => {
        event.preventDefault()
        const number = event.target.value
        setNewNumber(number)
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handlePersonChange} value={newName}/>
                </div>
                <div>
                    number: <input onChange={handleNumberChange} value={newNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm