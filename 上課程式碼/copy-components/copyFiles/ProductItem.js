import React, { useState, useEffect } from 'react'

function ProductItem(props) {
    const {id, picture, name, tags, price}=props

  return (
    <>
      <tr>
        <td className="number text-center">{id}</td>
        <td className="image">
          <img src={picture} alt="" />
        </td>
        <td className="product">
          <strong>{name}</strong>
          <br />
          
        </td>
        <td className="rate text-right">{tags}</td>
        <td className="price text-right">{price}</td>
      </tr>
    </>
  )
}

export default ProductItem
