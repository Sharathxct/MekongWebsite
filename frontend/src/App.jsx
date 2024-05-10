import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import Product from "./pages/Product"
import Login from "./pages/Login"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const {user} = useAuthContext()
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} ></Route>
          <Route path="/admin" element={user ? <DashBoard/> : <Navigate to='/login'/>} ></Route>
          <Route path="/product" Component={Product} ></Route>
          <Route path="/login" element={user ? <Navigate to='/admin' /> : <Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
