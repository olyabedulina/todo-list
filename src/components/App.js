import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

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

  return <div>
    <h1>TODO list:</h1>
    <TodoForm
      onNewTodo={(todo) => {
        setTodoItems(todoItems.concat(todo));
      }}
    />
    <TodoList
      items={todoItems}
      onTodoCompleteChange={handleTodoCompleteChange}
    />
  </div>
}

export default App
