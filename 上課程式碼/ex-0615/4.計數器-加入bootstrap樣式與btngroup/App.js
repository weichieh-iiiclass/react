import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      {/* <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1> */}

      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setTotal(total + 1)
          }}
        >
          +
        </button>

        <button type="button" className="btn btn-outline-primary" disabled>
          {total}
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setTotal(total - 1)
          }}
        >
          -
        </button>
      </div>
    </>
  )
}

export default App
