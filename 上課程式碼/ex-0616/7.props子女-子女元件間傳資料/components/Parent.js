import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // inner state
  const [parentData, setParentData] = useState('')

  return (
    <>
      <p>目前Parent資料：{parentData}</p>
      {/* 如果ChildA還沒透過按鈕傳送A自己的值給Parent */}
      {/* ChildB拿到的就會是Parent原本的值 */}
      {/* 但ChildA透過按鈕傳送自己的值給Parent之後 */}
      {/* ChildB拿到的就會是被ChildA覆蓋過後的Parent值 */}

      <ChildA setParentData={setParentData} />
      <ChildB parentData={parentData} />
    </>
  )
}

export default Parent
