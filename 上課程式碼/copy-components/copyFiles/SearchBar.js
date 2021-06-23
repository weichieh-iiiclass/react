import React from 'react'

function SearchBar(props) {
  return (
    <>
      {/* BEGIN SEARCH INPUT */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          defaultValue="web development"
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
      {/* END SEARCH INPUT */}
      <p>Showing all results matching "web development"</p>
      <div className="padding" />
    </>
  )
}

export default SearchBar
