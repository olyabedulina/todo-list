import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  return <div>
    <h1>TODO list:</h1>
    <TodoForm
      onNewTodo={ (todo) => {
        setTodoItems(todoItems.concat(todo));

      } }
    />
    <TodoList items={todoItems}/>
  </div>
}

export default App
