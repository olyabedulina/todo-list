import React from 'react'

const TodoList = ({ items }) => {
  return <ol>
    {
      items.map((todoItem, index) => <li key={index}>{todoItem}</li>)
    }
  </ol>
}

export default TodoList