import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, Login, Passwordresetrequest, Resetpassword, Signup, Verifyemail, Profile} from "./components"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Verifyemail' element={<Verifyemail/>} />
          <Route path='/Passwordresetrequest' element={<Passwordresetrequest/>} />
          <Route path='/Resetpassword' element={<Resetpassword/>} />
          <Route path='/Profile' element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
