import React from 'react'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

// 模擬從伺服器端來的產品資料
import { data } from '../data/'

function ProductDetail(props) {
  console.log(props)

  const [productItem, setProductItem] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // didMount
  // 從伺服器利用id值抓到本產品的內容
  useEffect(() => {
    const product = data.find((v, i) => {
      return props.match.params.id === v.id
    })

    console.log(product)
    setProductItem(product)
  }, [])

  return (
    <>
    {/* 列出商品內容 */}
      <h1>ProductDetail</h1>
      <p>目前產品的id值是：{props.match.params.id}</p>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={productItem.picture}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {productItem.name}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card
              title and make up the bulk of the card's
              content.
            </p>
            <a href="#/" className="btn btn-primary">
              {productItem.tags}
            </a>
          </div>
        </div>
      </div>

      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性
export default withRouter(ProductDetail)
