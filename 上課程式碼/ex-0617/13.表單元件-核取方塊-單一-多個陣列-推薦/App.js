import React, { useState } from 'react'
import RadioBox from './components/RadioBox'

function App() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  const [gender, setGender] = useState('')
  // 單一勾選(核取方塊)
  const [agree, setAgree] = useState(false)

  // 多勾選(核取方塊)，用陣列
  const [likeList, setLikeList] = useState([])

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
      {/* 用一個陣列來一次產出選項按鈕群組 */}
      {['男', '女', '未定'].map((v, i) => {
        return (
          <RadioBox
            key={i}
            value={v}
            gender={gender}
            setGender={setGender}
          />
        )
      })}
      <hr />
      <h3>單一核取方塊</h3>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意註冊相關規定</label>

      <hr />
      <h3>多個核取方塊(陣列)</h3>
      <input
        type="checkbox"
        value="雞腿"
        onChange={(e) => {
          const value = e.target.value

          // 陣列沒有包含此value的話->加入陣列中
          if (!likeList.includes(value))
            setLikeList([...likeList, value])

          // 陣列有包含此value的話->移出陣列
          if (likeList.includes(value)) {
            const newLikeList = likeList.filter(
              (v) => v !== value
            )
            setLikeList(newLikeList)
          }

        }}
        checked={likeList.includes('雞腿')}
      />
      <label>雞腿</label>

      <input
        type="checkbox"
        value="排骨"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value))
            setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter(
              (v) => v !== value
            )
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('排骨')}
      />
      <label>排骨</label>
    </>
  )
}

export default App
