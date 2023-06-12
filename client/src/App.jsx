import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Doctors from './pages/doctors/Doctors'
import Login from "./components/auth/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Auth from './pages/auth/Auth'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<Auth/>}/>         
      </Routes>
    </Router>
  )
}

export default App
