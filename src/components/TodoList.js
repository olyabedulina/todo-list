import React from 'react'

const TodoList = ({ items, onTodoCompleteChange, onTodoDelete, onTodoMoveUp, onTodoMoveDown,
                    onTodoMoveVeryTop, onTodoMoveVeryBottom, filter }) => {

  function handleCheckboxChange(event) {
    const todoId = event.target.getAttribute('data-todo-id');
    const isCompleted = event.target.checked;

    onTodoCompleteChange(todoId, isCompleted);
  }

  function handleDeleteButtonClick(event) {
    const todoId = event.target.getAttribute('data-todo-id');

    onTodoDelete(todoId);
  }

  function handleMoveUpButtonClick(event) {
    const todoId = event.target.getAttribute('data-todo-id');

    onTodoMoveUp(todoId);
  }

  function handleMoveDownButtonClick(event) {
    const todoId = event.target.getAttribute('data-todo-id');

    onTodoMoveDown(todoId);
  }

  function handleMoveVeryTopButtonClick(event) {
    const todoId = event.target.getAttribute('data-todo-id');

    onTodoMoveVeryTop(todoId);
  }

  function handleMoveVeryBottomButtonClick(event) {
    const todoId = event.target.getAttribute('data-todo-id');

    onTodoMoveVeryBottom(todoId);
  }

  return (items.length > 0) ? <table>
    <tbody>
      {
        items.filter(filter).map((todoItem, index) => <tr key={index}>
          <td>{index + 1}</td>
          <td><span className={todoItem.isCompleted ? 'todo-completed': ''}>{todoItem.value}</span></td>
          <td>
            {(new Date(todoItem.creationDate)).toLocaleString()}
          </td>
          <td>
            <input
              data-todo-id={index}
              type="checkbox"
              checked={todoItem.isCompleted}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            <button
              data-todo-id={index}
              type="button"
              disabled={index == 0}
              onClick={handleMoveUpButtonClick}
            >
              &uarr;
            </button>
            &nbsp;
            <button
              data-todo-id={index}
              type="button"
              disabled={index == (items.length - 1)}
              onClick={handleMoveDownButtonClick}
            >
              &darr;
            </button>
            &nbsp;&nbsp;&nbsp;

            <button
              data-todo-id={index}
              type="button"
              disabled={index == 0}
              onClick={handleMoveVeryTopButtonClick}
            >
              &#10514;
            </button>
            &nbsp;
            <button
              data-todo-id={index}
              type="button"
              disabled={index == (items.length - 1)}
              onClick={handleMoveVeryBottomButtonClick}
            >
              &#10515;
            </button>
            &nbsp;&nbsp;&nbsp;

            <button
              data-todo-id={index}
              type="button"
              onClick={handleDeleteButtonClick}
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