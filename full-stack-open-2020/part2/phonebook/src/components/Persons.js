import React from 'react'
import phonebook from '../services/phonebook'

const Person = (props) => {
    return (
        <div>
            {props.person.name} {props.person.number}
        </div>
    )
}

const Persons = (props) => {

    const deletePersonHandler = (person) => {

        if(window.confirm(`Delete ${person.name} ?`)) {
            phonebook.deletePerson(person.id).then(response => {
                console.log(response)
                props.setNotification(`Deleted ${person.name}`)
                props.setPersons(props.persons.filter(individualPerson => individualPerson.name !== person.name))

            }).catch(error => console.log(error))
        }
    }

    return (
        <div>
            {props.persons.map(person => {
            return (
                <div>
                    <Person key={person.id} person={person} />
                    <button onClick={() => deletePersonHandler(person)}>Remove</button>
                </div>
            )
            })} 
            
        </div>
    )
}

export default Persons