import React from 'react'
import "./Navbar.css"
import {Link, useParams} from "react-router-dom"

const Navbar = () => {
   const a = useParams();
   console.log(a)
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
               <Link to="/auth">
                  <button>Login</button>
               </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar