import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

// App(最上層)的角色或工作
// 1. 路由器/路由(表)
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

        <Switch>
        {/* 路由表 寫在Switch之中 */}
        {/* Switch: 代表同時之間只會有一個匹配到 */}
        {/* 路徑比較長的要寫在前面 */}
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* 網站首頁，使用exact精確比對路徑 */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
