import React, { useRef } from 'react'
import Item from './components/Item'

function App() {

  const inputEl = useRef()

  return (
    <>
      <ul>
        {[1, 2, 3].map((v, i) => (
          <Item value={v} key={i} />
        ))}
      </ul>
      <input type="text" ref={inputEl} />
      <button onClick={()=>{
        inputEl.current.focus()
      }}>focus input fileld</button>
    </>
  )
}

export default App
