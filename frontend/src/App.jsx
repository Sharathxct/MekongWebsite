import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Routes , Route } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} ></Route>
          <Route path="/admin" Component={DashBoard} ></Route>
          <Route path="/product" Component={Product} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
