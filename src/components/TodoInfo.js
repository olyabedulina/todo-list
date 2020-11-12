import React from 'react'
import { Link } from 'react-router-dom'

const TodoInfo = ({ data: {
  value,
  isCompleted,
  creationDate
} }) => {

  return <div>
    <h1>TODO info</h1>

    <h3>Todo text</h3>
    <p>{value}</p>

    <h3>Creation date</h3>
    <p>{(new Date(creationDate)).toLocaleString()}</p>

    <h3>Is completed</h3>
    <p>{isCompleted ? 'yes' : 'no'}</p>

    <Link to={'/'}>go back to TODO Manager</Link>
  </div>
}

export default TodoInfo
