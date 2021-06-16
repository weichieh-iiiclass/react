import React, { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      {/* console會出現warning，因為'a'不是數字 */}
      <MyButton setTotal={setTotal} total={total} value={'a'} />
      <MyButton setTotal={setTotal} total={total} />
    </>
  )
}

export default App
