import React, { Fragment, useState, useRef, useEffect } from 'react'

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
    onTodoMoveVeryBottom,
    onTodoTextChange
}) => {
  const inputRef = useRef()
  const [editMode, setEditMode] = useState(false);
  const [editableValue, setEditableValue] = useState(data.value)

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

  function handleInputChange(event) {
    setEditableValue(event.target.value)
  }

  function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      setEditMode(false);
      submitTodoItem(event);
    }
  }

  function handleInputBlur(event) {
    setEditMode(false);
    submitTodoItem(event);
  }

  function handleTodoTextDblClick(event) {
    setEditMode(true);
  }

  function submitTodoItem(event) {
    onTodoTextChange(data.id, event.target.value);
  }

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus()
    }
  }, [editMode])

  return <tr key={index}>
    <td>{index + 1}</td>
    <td>
      {
        (editMode) ? <input
            ref={inputRef}
            type="text"
            value={editableValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
          />
          : <span
              className={data.isCompleted ? 'todo-completed': ''}
              onDoubleClick={handleTodoTextDblClick}>
              {editableValue}
            </span>
      }
    </td>
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