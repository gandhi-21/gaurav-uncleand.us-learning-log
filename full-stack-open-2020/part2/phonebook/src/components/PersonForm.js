import React, { useState } from 'react'

const PersonForm = (props) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        let check = props.persons.find(person => person.name === newName)

        if(check !== undefined)
        {
            window.alert(`${newName} is already adde to the phonebook`)
        } else {
            const name = newName
            const newPerson = {
                name: name,
                number: newNumber,
                id: props.persons.length + 1
            }
            props.setPersons(props.persons.concat(newPerson))
        }
        setNewName('')
        setNewNumber('')
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