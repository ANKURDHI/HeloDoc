import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className='container'>
       <Link to="/">
        <div className="logo">
              <img src="/logo.avif" alt="" />
              <h1>Helodoc</h1>   
          </div>
       </Link>

        <nav>
            <ul>
               <Link to="/login">
                  <button>Login</button>
               </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar