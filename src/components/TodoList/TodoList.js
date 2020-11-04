import React from 'react'

import TodoListItem from './TodoListItem'

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

  const filteredItems = items.filter(filter);

  return (filteredItems.length > 0) ? <table>
    <tbody>
      {
        filteredItems.map((todoItem, index) => <TodoListItem
          key={todoItem.id}
          data={todoItem}
          index={index}
          isFirstItem={index === 0}
          isLastItem={index === (filteredItems.length -1)}
          enableSorting={enableSorting}
          onTodoCompleteChange={onTodoCompleteChange}
          onTodoDelete={onTodoDelete}
          onTodoMoveUp={onTodoMoveUp}
          onTodoMoveDown={onTodoMoveDown}
          onTodoMoveVeryTop={onTodoMoveVeryTop}
          onTodoMoveVeryBottom={onTodoMoveVeryBottom}
          />
        )
      }
    </tbody>
  </table> : 'There are no items.'
}

export default TodoList