import React, { Fragment } from 'react'

import CM from './styles.pcss'

const TodoListItem = ({
    data,
    index,
    isFirstItem,
    isLastItem,
    enableSorting,
    onTodoCompleteChange,
    onTodoDelete,
    onTodoMoveUp,
    onTodoMoveDown,
    onTodoMoveVeryTop,
    onTodoMoveVeryBottom
}) => {

  function handleCheckboxChange(event) {
    const isCompleted = event.target.checked;

    onTodoCompleteChange(data.id, isCompleted);
  }

  function handleDeleteButtonClick() {
    if (window.confirm("Do you really want to delete Todo item?")) {
      onTodoDelete(data.id);
    }
  }

  function handleMoveUpButtonClick() {
    onTodoMoveUp(data.id);
  }

  function handleMoveDownButtonClick() {
    onTodoMoveDown(data.id);
  }

  function handleMoveVeryTopButtonClick() {
    onTodoMoveVeryTop(data.id);
  }

  function handleMoveVeryBottomButtonClick() {
    onTodoMoveVeryBottom(data.id);
  }

  return <tr key={index}>
    <td>{index + 1}</td>
    <td><span className={data.isCompleted ? 'todo-completed': ''}>{data.value}</span></td>
    <td>
      {(new Date(data.creationDate)).toLocaleString()}
    </td>
    <td>
      <input
        type="checkbox"
        checked={data.isCompleted}
        onChange={handleCheckboxChange}
      />
    </td>
    <td>
      {
        (enableSorting) ? <Fragment>
          <button
            type="button"
            disabled={isFirstItem}
            onClick={handleMoveUpButtonClick}
          >
            &uarr;
          </button>
          &nbsp;
          <button
            type="button"
            disabled={isLastItem}
            onClick={handleMoveDownButtonClick}
          >
            &darr;
          </button>
          &nbsp;&nbsp;&nbsp;

          <button
            type="button"
            disabled={isFirstItem}
            onClick={handleMoveVeryTopButtonClick}
          >
            &#10514;
          </button>
          &nbsp;
          <button
            type="button"
            disabled={isLastItem}
            onClick={handleMoveVeryBottomButtonClick}
          >
            &#10515;
          </button>
          &nbsp;&nbsp;&nbsp;
        </Fragment> : null
      }
      <button
        type="button"
        onClick={handleDeleteButtonClick}
        className={CM.button}
      >
        Delete
      </button>
    </td>
  </tr>
}

export default TodoListItem