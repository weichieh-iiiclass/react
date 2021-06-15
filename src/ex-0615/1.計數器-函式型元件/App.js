/* 函式型元件範例 */
/*
  【三個名字要一樣】
  App.js、函式App、export App

  【勾子(hooks)】
  凡有use開頭的，在react裡面叫勾子(hooks)，是一種擴充、外掛
  專門是在函式行元件所使用

  【import】 
  從react導出，React預設導入，{useState}部分導入(是react之中的函式庫，有需要用到的話才導入)

  【[total, setTotal]】 getter setter
  【遷入變數方法】:{total}
*/

import React, { useState } from 'react'

function App() {
  // 使用狀態，勾子(hooks)
  // 解構賦值語法(es6)
  // useState(0) = [0,f]
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default App
