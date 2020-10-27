import React, { useState, useEffect, useRef } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoSelector from './TodoSelector'

function saveTodoItems(todoItems) {
  localStorage.setItem('todos', JSON.stringify(todoItems))
}

function loadTodoItems() {
  return JSON.parse(localStorage.getItem('todos') || '[]')
}

const App = () => {
  const [todoState, setTodoState] = useState('all');
  const [todoItems, setTodoItems] = useState([]);

  const todoItemsRef = useRef()
  todoItemsRef.current = todoItems

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
      case 'actual':
        return !isCompleted
    }
  }

  const todoItemsStats = todoItems.reduce((acc, { isCompleted }) => {
    acc.all++

    if (isCompleted) {
      acc.completed++
    } else {
      acc.actual++
    }

    return acc
  }, {
    all: 0,
    completed: 0,
    actual: 0
  })

  useEffect(() => {
    setTodoItems(loadTodoItems())

    window.addEventListener('beforeunload', () => {
      saveTodoItems(todoItemsRef.current)
    })
  }, [])

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
      stats={todoItemsStats}
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
