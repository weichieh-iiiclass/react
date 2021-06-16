import React, { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      <MyButton setTotal={setTotal} total={total} value={1} />
      <MyButton setTotal={setTotal} total={total} value={-1} />
      <MyButton setTotal={setTotal} total={total} value={2} />
      <MyButton setTotal={setTotal} total={total} value={-2} />
    </>
  )
}

export default App
