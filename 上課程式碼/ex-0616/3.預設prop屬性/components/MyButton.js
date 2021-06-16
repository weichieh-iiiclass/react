import React from 'react'

function MyButton(props) {
    console.log(props)
    //先解出props
    const { setTotal, total, value } = props
    return<>
        <button
          onClick={() => {
            setTotal(total + value)
          }}
        >
          {value > 0 && '+'}
          {value}
        </button>
    </>
}

MyButton.defaultProps ={
    value: 1,
}

export default MyButton