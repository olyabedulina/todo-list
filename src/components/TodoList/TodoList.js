import React, { Fragment } from 'react'

import CM from './styles.pcss'

const TodoList = ({
  items,
  onTodoCompleteChange,
  onTodoDelete,
  onTodoMoveUp,
  onTodoMoveDown,
  onTodoMoveVeryTop,
  onTodoMoveVeryBottom,
  filter,
  enableSorting
}) => {
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

  const filteredItems = items.filter(filter);

  return (filteredItems.length > 0) ? <table>
    <tbody>
      {
        filteredItems.map((todoItem, index) => <tr key={index}>
          <td>{index + 1}</td>
          <td><span className={todoItem.isCompleted ? 'todo-completed': ''}>{todoItem.value}</span></td>
          <td>
            {(new Date(todoItem.creationDate)).toLocaleString()}
          </td>
          <td>
            <input
              data-todo-id={todoItem.id}
              type="checkbox"
              checked={todoItem.isCompleted}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>
            {
              (enableSorting) ? <Fragment>
                <button
                  data-todo-id={todoItem.id}
                  type="button"
                  disabled={index == 0}
                  onClick={handleMoveUpButtonClick}
                >
                  &uarr;
                </button>
                &nbsp;
                <button
                  data-todo-id={todoItem.id}
                  type="button"
                  disabled={index == (items.length - 1)}
                  onClick={handleMoveDownButtonClick}
                >
                  &darr;
                </button>
                &nbsp;&nbsp;&nbsp;

                <button
                  data-todo-id={todoItem.id}
                  type="button"
                  disabled={index == 0}
                  onClick={handleMoveVeryTopButtonClick}
                >
                  &#10514;
                </button>
                &nbsp;
                <button
                  data-todo-id={todoItem.id}
                  type="button"
                  disabled={index == (items.length - 1)}
                  onClick={handleMoveVeryBottomButtonClick}
                >
                  &#10515;
                </button>
                &nbsp;&nbsp;&nbsp;
              </Fragment> : null
            }
            <button
              data-todo-id={todoItem.id}
              type="button"
              onClick={handleDeleteButtonClick}
              className={CM.button}
            >
              Delete
            </button>
          </td>
        </tr>)
      }
    </tbody>
  </table> : 'There are no items.'
}

export default TodoList