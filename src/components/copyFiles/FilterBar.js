import React from 'react'

function FilterBar(props) {
  return (
    <>
      {/* BEGIN FILTERS */}
      <div className="col-md-3">
        <h2 className="grid-title">
          <i className="fa fa-filter" /> Filters
        </h2>
        <button className="btn btn-success">重設</button>
        <hr />
        {/* BEGIN FILTER BY PRICE */}
        <h4>價格Price:</h4>
        <div className="radio">
          <label>
            <input type="radio" className="rad" /> 1萬
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" className="rad" /> 2萬
          </label>
        </div>
        <hr/>
        {/* BEGIN FILTER BY CATEGORY */}
        <h4>標籤Tags:</h4>
        <div className="checkbox">
          <label>
            <input type="checkbox" className="icheck" /> 大螢幕
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" className="icheck" /> 小螢幕
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" className="icheck" /> 一般螢幕
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" className="icheck" /> apple
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" className="icheck" /> Android
          </label>
        </div>
        {/* END FILTER BY CATEGORY */}
        <div className="padding" />
        <div className="padding" />
      </div>
      {/* END FILTERS */}
    </>
  )
}

export default FilterBar
