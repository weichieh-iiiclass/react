import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <TodoItem
            // 要注意key的位置
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
