import React from 'react'
import "./Login.css"
import "./Login1.js"


const Login = () => {
  return (
    <main className='registration'>
       <div className="login-container" id="container">
        <div className="form-container sign-up-container">
            <form action="#" className='register'>
                <h1>Create Account</h1>
                
                <div className="infield">
                    <input type="text" placeholder="Name" />
                    <label></label>
                </div>
                <div className="infield">
                    <input type="email" placeholder="Email" name="email"/>
                    <label></label>
                </div>
                <div className="infield">
                    <input type="birthdate" placeholder="Birth Date(dd/mm/yy)" />
                    <label></label>
                </div>
              
                <div className="infield">
                    <input type="password" placeholder="Password" />
                    <label></label>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#" className='register'>
                <h1>Sign in</h1>
               
                <div className="infield">
                    <input type="Email" placeholder="Email/IC Number" name="Email"/>
                    <label></label>
                </div>
                <div className="infield">
                    <input type="password" placeholder="Password" />
                    <label></label>
                </div>
                <a href="#" className="forgot">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container" id="overlayCon">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Already Have an account</h1>
                    <p>To keep connected with us please login</p>
                    <button>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Create New Account</h1>
                    <p>Don't have  account</p>
                    <button>Sign Up</button>
                </div>
            </div>
            <button id="overlayBtn"></button>
        </div>
    </div>
    <script src='Login1.js'/>
    </main>
  )
}

export default Login