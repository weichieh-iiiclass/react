import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { data } from '../data/'

function ProductList(props) {
  console.log(props)
  // 因為加上了withRouter
  // props多加了三個屬性match, history, loaction
  //
  return (
    <>
      <h1>Product-List</h1>
      <ul>
        {data.map((product, i) => {
          return(
          <li key={i}>
            <Link to={`/product-detail/${product.id}`}>
              {product.name}/{product.price}
            </Link>
          </li>

          )
        })}
      </ul>

      <h2>會員登入情況:{props.auth ? '已經登入' : '未登入'}</h2>
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

// 因為綁定了withRouter
export default withRouter(ProductList)
