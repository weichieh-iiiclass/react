import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'

// App(最上層)的角色或工作
// 1. 路由器/路由(表)
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  // 使用者是否登入(false=沒登入)
  // 只是用來反映伺服器內部的登入狀況
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h2>用a來連結</h2>
        {/* 點連結的時候頁面會刷新 */}
        {/* 是在App元件的掛載階段didMount，從無到有，所以會員的狀態會回復到初始設定false，所以會員登入情況判斷會出問題 */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <hr />
        <h2>用Link來連結</h2>
        {/* 點連結的時候頁面不會刷新 */}
        {/* 是在App元件的更新階段didUpdate的週期 */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
        {/* 路由表 寫在Switch之中 */}
        {/* Switch: 代表同時之間只會有一個匹配到 */}
        {/* 路徑比較長的要寫在前面 */}
          <Route path="/product/orderlist/">
            <Product title="Order List" />
          </Route>
          <Route path="/product/cart/">
            <Product title="Cart" />
          </Route>
          <Route path="/product">
            <Product auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route exact path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          {/* 網站首頁，使用exact精確比對路徑 */}
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
