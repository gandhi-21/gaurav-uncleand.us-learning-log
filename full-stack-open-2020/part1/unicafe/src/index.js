import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <button onClick={() => onClickHandler(props.value, props.setValue)}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const onClickHandler = (number, increase) => {
  increase(number + 1)
}


const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if(total === 0)
  {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
    </div>
  )
}


const App = () => {
  // save clicks for each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" value={good} setValue={setGood} />
      <Button text="neutral" value={neutral} setValue={setNeutral} />
      <Button text="bad" value={bad} setValue={setBad} /> 
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))