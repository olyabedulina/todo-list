import React from 'react'

const TodoList = ({ items, onTodoCompleteChange }) => {

  function handleCheckboxChange(event) {
    const todoId = event.target.getAttribute('data-id');
    const isCompleted = event.target.checked;

    onTodoCompleteChange(todoId, isCompleted);
  }

  return <table>
    {
      items.map((todoItem, index) => <tr>
        <td>{index + 1}</td>
        <td><span className={todoItem.isCompleted ? 'todo-completed': ''}>{todoItem.value}</span></td>
        <td>
          <input
            data-id={index}
            type="checkbox"
            checked={todoItem.isCompleted}
            onChange={handleCheckboxChange}
          />
        </td>
      </tr>)
    }
  </table>
}

export default TodoList