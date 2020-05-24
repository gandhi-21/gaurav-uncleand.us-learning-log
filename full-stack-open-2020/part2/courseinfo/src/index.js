import React from 'react'
import ReactDom from 'react-dom'

import Course from './components/Course'

const App = () => {

  const courses = [
    {
      id: 1,
      name: 'Half Stack Application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(individualCourse => <Course key={individualCourse.id} course={individualCourse}/>)}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
