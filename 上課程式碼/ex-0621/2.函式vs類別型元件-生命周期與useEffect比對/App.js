import React, { useState } from 'react'
import ParentCC from './components/cc/ParentCC'
import ParentFC from './components/fc/ParentFC'

function App() {
  const [tagName, setTagName] = useState('ParentFC')

  const coms = { ParentCC, ParentFC }

  //標記暫存名稱：動態元件標記寫法，可以動態選擇<Tag />要出現哪個元件
  const Tag = coms[tagName]

  return (
    <>
      <button onClick={() => setTagName('ParentFC')}>
        函式型元件
      </button>
      <button onClick={() => setTagName('ParentCC')}>
        類別型元件
      </button>
      <Tag />
    </>
  )
}

export default App
