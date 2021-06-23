import React, { useState } from 'react'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  const [input, setInput] = useState(todoItem.text)
  // Localstate

  return (
    <>
      <li>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          autoFocus
        />
        <button onClick={() => {handleEditedSave(todoItem.id, input)}}>儲存</button>
        <button
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          取消
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm
