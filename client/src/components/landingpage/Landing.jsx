import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main>
        <section className="hero container">
            <div className="hero-image">
                <img src='/pexels-photo-5215017.webp'></img>
            </div>
            <div className="hero-content">
                <h3>FIND DOCTORS NEAR YOU</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sequi officia enim perferendis dicta, nemo vel minus eveniet voluptatibus iste sit, iure id culpa debitis possimus. Eligendi impedit perspiciatis natus.</p>
                <Link to="/doctors"><button>FIND DOCTORS</button></Link>
            </div>
        </section>

        <section className="feature-container container">
            <h3>Features</h3>
            <div className="feature-list">
                <div className="feature">One</div>
                <div className="feature">Two</div>
                <div className="feature">Three</div>
            </div>
        </section>

        <section className="doctor-container container">
            <h3>Popular Doctors</h3>
            <div className="doctor-list">
                <div className="doctor">1</div>
                <div className="doctor">2</div>
                <div className="doctor">3</div>
            </div>
        </section>
    </main>
  )
}

export default Landing