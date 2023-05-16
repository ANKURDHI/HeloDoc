import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className='container'>
       <Link to="/">
        <div className="logo">
              <img src="../../public/logo.avif" alt="" />
              <h2>Helodoc</h2>   
          </div>
       </Link>

        <nav>
            <ul>
               <Link to="/login">
                  <li><a href="Login.jsx">Login</a></li>
               </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar