import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoSelector from './TodoSelector'

const App = () => {
  const [todoState, setTodoState] = useState('all');
  const [todoItems, setTodoItems] = useState([]);

  function handleTodoStateChange(nextTodoState) {
    setTodoState(nextTodoState)
  }

  function handleTodoCompleteChange(todoId, isCompleted) {
    setTodoItems(
      todoItems.map(function(item, index) {
        if (index == todoId) {
          return {
            ...item,
            isCompleted
          }
        }
        return item;
      })
    )
  }

  function handleTodoDelete(todoId) {
    setTodoItems(
      todoItems.filter( (item, index) => (index != todoId))
    )
  }

  const todoFilter = ({ isCompleted }) => {
    switch (todoState) {
      case 'all':
        return true
      case 'completed':
        return isCompleted
      case 'progress':
        return !isCompleted
    }
  }

  return <div>
    <h1>TODO list:</h1>
    <TodoForm
      onNewTodo={(todo) => {
        setTodoItems(todoItems.concat(todo));
      }}
    />
    <br/>
    <TodoSelector
      todoState={todoState}
      onChange={handleTodoStateChange}
    />
    <br/>
    <TodoList
      items={todoItems}
      onTodoCompleteChange={handleTodoCompleteChange}
      onTodoDelete={handleTodoDelete}
      filter={todoFilter}
    />
  </div>
}

export default App
