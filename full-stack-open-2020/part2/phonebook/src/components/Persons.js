import React from 'react'

const Person = (props) => {
    return (
        <div>
            {props.person.name} {props.person.number}
        </div>
    )
}

const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Persons