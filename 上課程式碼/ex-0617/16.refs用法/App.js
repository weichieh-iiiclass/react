import React, { useRef } from 'react'
import Item from './componnets/Item'

function App() {
  // 1.宣告實體參照 useRef()
  const inputEl = useRef()

  return (
    <>
      <ul>
        {[1, 2, 3].map((v, i) => (
          <Item value={v} key={i} />
        ))}
      </ul>

      {/* 2. 在input中寫ref={參照} */}
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          // 使用時，需要加上.current
          inputEl.current.focus()
        }}
      >
        Focus Input Field
      </button>
    </>
  )
}

export default App
