import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <header className='container'>
        <div className="logo">
            <img src="../../public/logo.avif" alt="" />
            <h2>Helodoc</h2>   
        </div>

        <nav>
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar