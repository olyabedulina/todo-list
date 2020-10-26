import React from 'react'

const TodoList = ({ items, onTodoCompleteChange, onTodoDelete, filter }) => {
  function handleCheckboxChange(event) {
    const todoId = event.target.getAttribute('data-checkbox-id');
    const isCompleted = event.target.checked;

    onTodoCompleteChange(todoId, isCompleted);
  }

  function handleButtonClick(event) {
    const todoId = event.target.getAttribute('data-button-id');

    onTodoDelete(todoId);
  }

  return (items.length > 0) ? <table>
    <tbody>
      {
        items.filter(filter).map((todoItem, index) => <tr key={index}>
          <td>{index + 1}</td>
          <td><span className={todoItem.isCompleted ? 'todo-completed': ''}>{todoItem.value}</span></td>
          <td>
            <input
              data-checkbox-id={index}
              type="checkbox"
              checked={todoItem.isCompleted}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <button
              data-button-id={index}
              type="button"
              onClick={handleButtonClick}
            >
              Delete
            </button>
          </td>
        </tr>)
      }
    </tbody>
  </table> : 'There are no any todo items yet.'
}

export default TodoList