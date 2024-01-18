import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "./redux/loginSlice"

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user') || "{}");
   
  useEffect(() => {
    dispatch(setUser(user))
  })

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={'/login'} replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
