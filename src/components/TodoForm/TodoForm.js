import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import CM from './styles.pcss'

const TodoForm = ({ onNewTodo }) => {
  const [value, setValue] = useState('')

  function handleInputChange(event) {
    setValue(event.target.value)
  }

  function submitTodo() {
    if (value.length > 0) {
      onNewTodo({
        id: nanoid(),
        value,
        isCompleted: false,
        creationDate: (new Date()).toISOString()
      });
      setValue('');
    }
  }

  function handleClick() {
    submitTodo();
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      submitTodo();
    }
  }

  return <div>
    <input
      type="text"
      placeholder="Type new todo"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
    &nbsp;&nbsp;
    <button className={CM.button} type="button" onClick={handleClick}>Add</button>
  </div>
}

export default TodoForm