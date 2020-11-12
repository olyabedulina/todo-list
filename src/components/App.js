import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import TodoManager from './TodoManager'
import TodoInfo from './TodoInfo'

function saveTodoItems(todoItems) {
  localStorage.setItem('todos', JSON.stringify(todoItems))
}

function loadTodoItems() {
  return JSON.parse(localStorage.getItem('todos') || '[]')
}

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  function handleTodoItemsChange(nextTodoItems) {
    setTodoItems(nextTodoItems)
  }

  const todoItemsRef = useRef()
  todoItemsRef.current = todoItems

  useEffect(() => {
    setTodoItems(loadTodoItems())

    window.addEventListener('beforeunload', () => {
      saveTodoItems(todoItemsRef.current)
    })
  }, [])

  return <div>
    <Switch>
      <Route
        path="/todo/:id"
        render={
          ({ match: { params: { id: targetTodoId } } }) => {
            const todoItemData = todoItems.find(
              ({ id }) => (id === targetTodoId)
            )
            return todoItemData ? <TodoInfo data={todoItemData}/> : null
          }
        }
      />
      <Route
        path="/"
        exact
        render={
          () => <TodoManager
            todoItems={todoItems}
            onTodoItemsChange={handleTodoItemsChange}
          />
        }
      />
      <Redirect to="/"/>
    </Switch>
  </div>
}

export default App
