import React, { useState, useEffect } from 'react'

function SortBar(props) {
  return (
    <>
      <div className="row">
        {/* BEGIN ORDER RESULT */}
        <div className="col-sm-6">
          <div className="btn-group">
          <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>預設排序 - 以ID排序</option>
              <option value="2">以價格排序-由少至多</option>
              <option value="2">以價格排序-由多至少</option>
            </select>
          </div>
        </div>
        {/* END ORDER RESULT */}
        <div className="col-md-6 text-right">
          <div className="btn-group">
            <button type="button" className="btn btn-default active">
              <i className="fa fa-list" />
            </button>
            <button type="button" className="btn btn-default">
              <i className="fa fa-th" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortBar
