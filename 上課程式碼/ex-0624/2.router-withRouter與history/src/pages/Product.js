import React from 'react'
import { withRouter } from 'react-router-dom'

function Product(props) {
  console.log(props)
  // 因為加上了withRouter
  // props多加了三個屬性match, history, loaction

  return (
    <>
      <h1>Product - {props.title}</h1>
      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        返回上一頁
      </button>
      <button
        onClick={() => {
          props.history.push('/login')
        }}
      >
        跳到登入頁
      </button>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性
export default withRouter(Product)
