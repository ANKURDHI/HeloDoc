import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
       <div className="container grid">
         <div className="item">
           <img src="/logo.avif" alt="logo" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, explicabo!</p>
         </div>
         <div className="item">
          <h3>For Patients</h3>
          <ul>
            <li>Search for Doctors</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
         </div>
         <div className="item">
          <h3>For Doctors</h3>
          <ul>
            <li>Appointment</li>
            <li>Chat</li>
            <li>Login</li>
          </ul>
         </div>
         <div className="item">
          <h3>Contact Us</h3>
          <ul>
            <li>3556 Beech Street, USA</li>
            <li>+1 315 369 5943</li>
            <li>doccure@example.com</li>
          </ul>
         </div>
         <div className="item">
          <h3>Join Our Newsletter</h3>
          <form action="#">
            <input type="text" placeholder='Enter email'/>
            <button type='submit'>Submit</button>
          </form>
         </div>
       </div>
    </footer>
  )
}

export default Footer