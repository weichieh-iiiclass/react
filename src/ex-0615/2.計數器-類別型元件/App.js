/*
  類別型元件範例
*/

import React from 'react'

class App extends React.Component {
  constructor() {
    super() //super去執行父母類別的建構式
    this.state = {
      //宣告狀態，必定為物件值
      total: 0,
    }
  }
  render() {
    //render是如何呈現在網頁上
    return (
      <h1
        onClick={() => {
          this.setState({ total: this.state.total + 1 }) //setState({})裡面必定是物件
        }}
      >
        {this.state.total}
      </h1>
    )
  }
}

export default App
