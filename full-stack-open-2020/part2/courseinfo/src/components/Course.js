import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.part.name} {props.part.exercises}
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(individualPart => <Part key={individualPart.id} part={individualPart} />)}
        </div>
    )
}

const Total = (props) => {

    const total = props.course.parts.reduce((accumulator, currentValue) => (accumulator + currentValue.exercises), 0)

    return (
        <div>
            <p>Total Number of exercises {total}</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
    )
}

export default Course