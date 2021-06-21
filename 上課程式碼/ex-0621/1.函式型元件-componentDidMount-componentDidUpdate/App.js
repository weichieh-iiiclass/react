import React, { useEffect, useState } from 'react'

/*
  callback函式,依賴性陣列
  useEffect(()=>{},[])
  useEffect(()=>{componentDidMount},[])
  useEffect(()=>{componentDidUpdate},[total])
  componentDidMount：用didmount時有空陣列沒關係，移除的話會一直執行
  componentDidUpdate：要跟勾子說要跟著哪個東西的狀態走，所以依賴性陣列就是[total]
*/


function App() {
  const [total, setTotal] = useState(0)

  // 指示目前目前元件進入更新狀態
  const [start, setStart] = useState(false)

  // 1. componentDidMount
  // 元件初次(一開始)呈現在網頁上
  useEffect(() => {
    console.log('componentDidMount ')
    setStart(true)
  }, [])

  // 2. componentDidUpdate錯誤寫法：
  // 會變成componentDidUpdate+componentDidMount
  // 和類別型不同，第一次還是會執行裡面的程式碼(在0的時候)
  // 我們可以透過if(total === 0)修正這個情況，但會有bug，加減回到0的時候就不會再console.log
  useEffect(() => {
    console.log(
      'componentDidUpdate+componentDidMount ',
      total
    )
  }, [total])

  // 3. componentDidUpdate正確寫法：加上start做判斷
  useEffect(() => {
    // ignore略過
    if (!start) return

    console.log('componentDidUpdate ', total)
  }, [total, start])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
