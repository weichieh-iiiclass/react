import React from 'react'

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <div className="container">
  <div className="col-sm-12 col-md-12 mb-5">
    <p className="text-gray">Checkbox</p>
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
    </div>
    <div className="custom-control custom-checkbox mb-5">
      <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked />
      <label className="custom-control-label" htmlFor="customCheck2">Or this one</label>
    </div>
    <p className="text-gray">Radios</p>
    <div className="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" defaultChecked />
      <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
    </div>
    <div className="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" checked/>
      <label className="custom-control-label" htmlFor="customRadio2" >Or toggle this other custom radio</label>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
