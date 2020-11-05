import React, { useState, useEffect, useRef } from 'react'
import _sortBy from 'lodash/sortBy'

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
      todoItems.map(function(item) {
        if (item.id === todoId) {
          return {
            ...item,
            isCompleted
          }
        }
        return item;
      })
    )
  }

  function handleTodoTextChange(todoId, value) {
    setTodoItems(
      todoItems.map(function(item) {
        if (item.id === todoId) {
          return {
            ...item,
            value
          }
        }
        return item;
      })
    )
  }

  function handleTodoDelete(todoId) {
    setTodoItems(
      todoItems.filter((item) => (item.id !== todoId))
    )
  }

  function handleTodoMoveUp(targetTodoId) {
    const targetTodoIdIndex = todoItems.findIndex(({ id }) => (id === targetTodoId))

    setTodoItems(
      _sortBy(todoItems, (iterableTodoItem) => {
        const iterableTodoItemIndex = todoItems.indexOf(iterableTodoItem)
        return (iterableTodoItemIndex === targetTodoIdIndex) ? (iterableTodoItemIndex - 2) : iterableTodoItemIndex;
      })
    )
  }

  function handleTodoMoveDown(targetTodoId) {
    const targetTodoIdIndex = todoItems.findIndex(({ id }) => (id === targetTodoId))

    setTodoItems(
      _sortBy(todoItems, (iterableTodoItem) => {
        const iterableTodoItemIndex = todoItems.indexOf(iterableTodoItem)
        return (iterableTodoItemIndex === targetTodoIdIndex) ? (iterableTodoItemIndex + 2) : iterableTodoItemIndex;
      })
    )
  }

  function handleTodoMoveVeryTop(targetTodoId) {
    const targetTodoIdIndex = todoItems.findIndex(({ id }) => (id === targetTodoId))

    setTodoItems(
      _sortBy(todoItems, (iterableTodoItem) => {
        const iterableTodoItemIndex = todoItems.indexOf(iterableTodoItem)
        return (iterableTodoItemIndex === targetTodoIdIndex) ? -1 : iterableTodoItemIndex;
      })
    )
  }

  function handleTodoMoveVeryBottom(targetTodoId) {
    const targetTodoIdIndex = todoItems.findIndex(({ id }) => (id === targetTodoId))

    setTodoItems(
      _sortBy(todoItems, (iterableTodoItem) => {
        const iterableTodoItemIndex = todoItems.indexOf(iterableTodoItem)
        return (iterableTodoItemIndex === targetTodoIdIndex) ? (todoItems.length + 1) : iterableTodoItemIndex;
      })
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
      onTodoMoveUp={handleTodoMoveUp}
      onTodoMoveDown={handleTodoMoveDown}
      onTodoMoveVeryTop={handleTodoMoveVeryTop}
      onTodoMoveVeryBottom={handleTodoMoveVeryBottom}
      onTodoTextChange={handleTodoTextChange}
      filter={todoFilter}
      enableSorting={(todoState === 'all')}
    />
  </div>
}

export default App
