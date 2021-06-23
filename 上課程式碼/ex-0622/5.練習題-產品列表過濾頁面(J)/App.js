import React, { useState, useEffect } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'

import { data } from './data/'

/*
  data:
    {
      id: '1',
      picture: 'http://placehold.it/32x32',
      stock: 5,
      name: 'iPhone 12 Pro',
      price: 25000,
      tags: '蘋果,大螢幕',
    },

*/

function App() {
  // 產品用狀態
  // 1.從伺服器來的原始資料products
  // 2.從原始資料經過各種處理(排序、搜尋、過濾)後，用來顯示的資料displayProducts
  const [products, setProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])

  const [tags, setTags] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          {/* BEGIN SEARCH RESULT */}
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <FilterBar />
                  {/* BEGIN RESULT */}
                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o" /> Result
                    </h2>
                    <hr />
                    <SearchBar />
                    <SortBar />
                    <ProductList products={products} />
                    {/* BEGIN PAGINATION */}
                    <ul className="pagination">
                      <li className="disabled">
                        <a href="#/">«</a>
                      </li>
                      <li className="active">
                        <a href="#/">1</a>
                      </li>
                      <li>
                        <a href="#/">2</a>
                      </li>
                      <li>
                        <a href="#/">3</a>
                      </li>
                      <li>
                        <a href="#/">4</a>
                      </li>
                      <li>
                        <a href="#/">5</a>
                      </li>
                      <li>
                        <a href="#/">»</a>
                      </li>
                    </ul>
                    {/* END PAGINATION */}
                  </div>
                  {/* END RESULT */}
                </div>
              </div>
            </div>
          </div>
          {/* END SEARCH RESULT */}
        </div>
      </div>
    </>
  )
}

export default App
