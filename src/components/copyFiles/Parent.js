import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
    const [parentData, setpParentData] = useState('Parent Data')

    return<>
        <p>目前Parent資料: {parentData}</p>
        <ChildA setParentData={setpParentData} />
        <ChildB ChildAData={parentData} />
    </>
}



export default Parent