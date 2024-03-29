import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'

// App(最上層)的角色或工作
// 1. 路由器/路由(表)
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  // 使用者是否登入(false未登入)
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
      
      <h2>用Link來連結</h2>
      {/* 點連結的時候頁面不會刷新 */}
      {/* 是在App元件的更新階段didUpdate的週期 */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product-list">Product List</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/product-detail">Product Detail</Link></li>
      </ul>


        <Switch>
        {/* 1-定義網址參數params */}
        {/* ˋ:idˋ為參數值，後面的?代表可選的 */}
        <Route path="/product-detail/:id?" >
            <ProductDetail auth={auth} />
          </Route>
          <Route path="/product-list" >
            <ProductList auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route exact path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          {/* 網站首頁 */}
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
