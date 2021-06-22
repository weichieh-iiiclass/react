import React from 'react'

function TodoAppForm(props) {
    const {todoInput, setTodoInput, handleAddNew} =props

  return(
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleAddNew}
      />
    </>
  )
}

export default TodoAppForm