import React from 'react'

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <h2>會員登入情況:{props.auth ? '已經登入' : '未登入'}</h2>
      <hr/>
      {/* Radio */}
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="radioBtn2"
              checked
            />
            <label htmlFor="radioBtn2" className="custom-control-label" >測試</label>
          </div>
          <hr/>
      {/* Checkbox */}
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            checked
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Check this custom checkbox
          </label>
        </div>
      
    </>
  )
}

export default Home
