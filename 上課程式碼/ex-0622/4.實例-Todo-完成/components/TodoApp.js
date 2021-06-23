import React, { useState } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  // 【 0-待辨事項每個的物件值】
  // todo = {id:number, text:string, completed:bool(default: false), edited:false}
  const [todos, setTodos] = useState([
    {
      id: 9999999,
      text: '努力學React',
      completed: true,
      edited: false,
    },
    {
      id: 9999977,
      text: '買iPhone或安卓手機',
      completed: false,
      edited: false,
    },
  ])

  // 【 1-input框新增功能 】
  // 建立一個todo項目的物件值，用時間物件轉微秒整數當id值
  // 文字輸入框的值加到陣列todos，相當於unshift，在陣列前加入新的成員
  // 設定陣列狀態值
  // 清空文字輸入框
  const handleAddNew = (e) => {
    if (e.key === 'Enter') {
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
        edited: false
      }

      const newTodos = [newTodoItem, ...todos]
      setTodos(newTodos)
      setTodoInput('')
    }
  }

  // 【 2-勾選完成功能 】
  // 先由目前的todos拷貝出一個陣列
  // 利用id值找到對應的todo項目的索引值
  // 用findIndex的作法
  // 如果有找到就切換completed的true/false
  // 設定回狀態值
  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos)
    }
  }

  // 【 3-刪除功能 】
  // 先由目前的todos過濾掉"不要"有這個id的一個新陣列
  // 設定回狀態值
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  // 【 4-1-編輯功能 】
  // 先由目前的todos拷貝出一個新的陣列
  // 利用id值找到對應的todo項目的索引值，用findIndex的作法
  // 如果有找到就切換edited的true/false
  // 設定回狀態值
  const handleEdited = (id) => {

    const newTodos = [...todos]
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].edited = !newTodos[index].edited
      setTodos(newTodos)
    }
  }

  // 【 4-2-儲存功能 】
  // 先由目前的todos拷貝出一個新的陣列
  // 利用id值找到對應的todo項目的索引值，用findIndex的作法
  // 如果有找到的話，把該項目的文字屬性改成新的
  // 設定回原本的todos
  // 儲存完之後，切換到原本的清單頁面狀態
  const handleEditedSave = (id, text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    if (index !== -1) {
      newTodos[index].text = text
      setTodos(newTodos)
      handleEdited(id)
    }
  }

   

  

 

  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleAddNew={handleAddNew}
      />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEdited={handleEdited}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}

export default TodoApp
