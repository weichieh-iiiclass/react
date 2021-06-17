import React, { useState } from 'react'

function App() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  const [gender, setGender] = useState('')
  const [gender2, setGender2] = useState('')

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
      <hr />
      <h2>文字區域</h2>
      {/* React中的文字區域是單個元素標記的 */}
      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <h2>下拉選單</h2>
      <select
        value={seletedOption}
        onChange={(e) => {
          setSeletedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
        <option value="水果">水果</option>
      </select>
      <hr />
      <h3>選項按鈕</h3>
      <input
        type="radio"
        value="男"
        checked={gender === '男'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>男</label>
      <input
        type="radio"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>女</label>
      <input
        type="radio"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>未定</label>
      
      <hr />
      <h3>選項按鈕2</h3>
      {/* 用一個陣列來一次產出選項按鈕群組 */}
      {/* 因為使用map須加上key，如果使用React.Fragment簡寫法<></>無法加上key */}
      {/* 所以使用React.Fragment原始寫法  */}
      {['男', '女', '未定'].map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              type="radio"
              value={v}
              checked={gender2 === v}
              onChange={(e) => {
                setGender2(e.target.value)
              }}
            />
            <label>{v}</label>
          </React.Fragment>
        )
      })}
      <hr />
    </>
  )
}

export default App
