import React, { useState } from 'react'

function App() {
  const [textfield, setTextfield] = useState('')

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
    </>
  )
}

export default App
