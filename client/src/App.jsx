import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Doctors from './pages/doctors/Doctors'
import Login from "./components/auth/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Auth from './pages/auth/Auth'
import Dashboard from './components/dashboard/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/auth' element={<Auth/>}/>         
        <Route path='/dashboard' element={<Dashboard role="doctor"/>}/>         
      </Routes>
    </Router>
  )
}

export default App
