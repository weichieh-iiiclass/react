import React, { useState } from 'react'

function TodoApp() {
  // 存清單輸入框內新增的資料
  const [todoInput, setTodoInput] = useState('')
  // 存總清單的陣列
  const [todos, setTodos] = useState([
    '努力學React',
    '買iPhone或安卓手機',
  ])

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
