import React from 'react'
import Home from './pages/home/Home'
import Doctors from './pages/doctors/Doctors'
import Login from "./components/loginpage/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>         
      </Routes>
    </Router>
  )
}

export default App
