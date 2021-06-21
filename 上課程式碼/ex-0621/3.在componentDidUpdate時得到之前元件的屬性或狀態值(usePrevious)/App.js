import React, { useState, useEffect, useRef } from 'react'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function App() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  useEffect(() => {
    console.log(count, prevCount)
  }, [count, prevCount])

  return (
    <>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
