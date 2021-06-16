import React from 'react'
import PropTypes from 'prop-types'

function MyButton(props) {
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

MyButton.propTypes = {
  value: PropTypes.number,
}

MyButton.defaultProps ={
    value: 1,
}

export default MyButton