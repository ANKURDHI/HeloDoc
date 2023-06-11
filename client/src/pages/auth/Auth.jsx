import React, { useState } from 'react'
import Login from '../../components/auth/Login'
import Signup from '../../components/auth/Signup'
import Navbar from "../../components/navbar/Navbar"
import Footer from '../../components/footer/Footer'
import "./Auth.css"
import { useLocation, useParams } from 'react-router-dom'

const Auth = () => {
    const [page, setPage] = useState(false)
    const {param} = useParams();
    const location = useLocation()
    console.log(param,location)
  return (
    <>
      <Navbar/>
      <section className="auth container">
        <div className="form">
          {page?<h3>Login</h3>:<h3>Sign Up</h3>}
          {page?<p>Dont have an account?<a>Sign Up</a></p>
          :<h3>Already have an account?<a>Login</a></h3>}
          {page?<Login role="admin"/>:<Signup role="doctor"/>}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Auth