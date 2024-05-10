import Home from "./pages/Home"
import './App.css'
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import Product from "./pages/Product"
import Login from "./pages/Login"
import { useAuthContext } from "./hooks/useAuthContext"
import Notfound from "./components/Notfound"

function App() {
  const {user} = useAuthContext()
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/MekongWebsite/" Component={Home} ></Route>
          <Route path="/MekongWebsite/admin" element={user ? <DashBoard/> : <Navigate to='/login'/>} ></Route>
          <Route path="/MekongWebsite/product" Component={Product} ></Route>
          <Route path="/MekongWebsite/login" element={user ? <Navigate to='/admin' /> : <Login />}></Route>

          <Route path="*" Component={Notfound}  ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
