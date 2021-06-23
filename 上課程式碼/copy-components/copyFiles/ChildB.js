import React from 'react'

function ChildB(props) {

    return<>
        <h1>This is ChildB</h1>
        <h1>從ChildA得到的資料:{props.ChildAData}</h1>
        <hr/>
    </>
}



export default ChildB