import { useEffect, useState } from 'react'

function MultipleInputs(props) {

  // 1.養成先設定好預設值的習慣
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    birth: '',
    price: 0,
  })

  // 2.常用到的部分寫成一個函式
  // 箭頭函式回傳另外一個函式，因為使用物件，所以需要用到...合併
  // [filedName]:動態的欄位名稱(屬性名稱)，state指的是input
  // 原本下面的寫法:
  // onChange={(e)=>{
  //    setInputs({...inputs, name: e.target.value})
  // }}
  // 
  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({
      ...state,
      [fieldName]: event.target.value,
    }))
  }

  // 觀察變化用
  //   useEffect(() => {
  //     console.log(inputs)
  //   }, [inputs])

  // 3.return的部分
  return (
    <>
      <input
        type="text"
        value={inputs.name}
        // 每一個輸入框一定要加名稱，和定義的欄位狀態值最好一樣
        name="name"
        onChange={onChangeForField('name')}
        placeholder="姓名"
      />
      <input
        type="text"
        value={inputs.email}
        name="email"
        onChange={onChangeForField('email')}
        placeholder="Email"
      />
      <input
        type="text"
        value={inputs.username}
        name="username"
        onChange={onChangeForField('username')}
        placeholder="帳號"
      />
      <input
        type="password"
        value={inputs.password}
        name="password"
        onChange={onChangeForField('password')}
        placeholder="密碼"
      />
      <input
        type="date"
        value={inputs.birth}
        name="birth"
        onChange={onChangeForField('birth')}
      />
      <input
        type="range"
        value={inputs.price}
        name="price"
        onChange={onChangeForField('price')}
      />
    </>
  )
}

export default MultipleInputs
