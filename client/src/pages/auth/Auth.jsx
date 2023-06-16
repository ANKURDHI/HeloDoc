import React, { useState } from 'react'
import Login from '../../components/auth/Login'
import Signup from '../../components/auth/Signup'
import Navbar from "../../components/navbar/Navbar"
import Footer from '../../components/footer/Footer'

const Auth = () => {
  const [role, setRole] = useState("patient")
    const [page, setPage] = useState(true)
    const switchPage = () => {
      setPage(!page)
    }
  return (
    <>
      <Navbar/>
      <section className="auth container">
        <div className="form">
          {role=='patient'?page?<h3>Login</h3>:<h3>Sign Up</h3>:<h3>Login</h3>}
          {role=='patient'&& (page?<p>Dont have an account?<a onClick={switchPage}>Sign Up</a></p>
          :<h3>Already have an account?<a onClick={switchPage}>Login</a></h3>)}
          {role=='patient'?page?<Login role={role} setRole={setRole}/>:<Signup role={role}/>:<Login role={role} setRole={setRole}/>}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Auth