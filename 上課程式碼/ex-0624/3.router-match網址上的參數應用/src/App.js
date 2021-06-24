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
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'

// App的角色或工作
// 1. 路由器/路由
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  // 使用者是否登入(false=沒登入)
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h2>用Link來連結</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product-list">Product List</Link>
          </li>
          <li>
            <Link to="/product-detail">Product Detail</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* 路由表 */}
        {/* switch: 同時之間只會有一個匹配 */}
        <Switch>
          {/* 網站首頁 */}
          {/* ps.比較長字串路由放上面 */}
          {/* 定義網址參數 params */}
          {/* `:id`為一參數值 */}
          {/* 後面加「?」代表可選的 */}
          <Route path="/product-detail/:id?">
            <ProductDetail auth={auth} />
          </Route>
          <Route path="/product-list">
            <ProductList auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route exact path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
