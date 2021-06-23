import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
    const {products} = props
  return (
    <>
      {/* BEGIN TABLE RESULT */}
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {/* 商品項目 */}
            {products.map((product, index) => (
              <ProductItem
                id={product.id}
                picture={product.picture}
                name={product.name}
                tags={product.tags}
                price={product.price}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* END TABLE RESULT */}
    </>
  )
}

export default ProductList
