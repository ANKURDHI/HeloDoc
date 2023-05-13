import React from 'react'
import "./Landing.css"

const Landing = () => {
  return (
    <main>
        <section className=" hero container">
            {/* <div className="hero-image">
                <img src='/1.webp'></img>
            </div> */}
            <div className="hero-content">
                <h3>FIND DOCTORS NEAR YOU</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sequi officia enim perferendis dicta, nemo vel minus eveniet voluptatibus iste sit, iure id culpa debitis possimus. Eligendi impedit perspiciatis natus.</p>
                <form action="#">
                    <label htmlFor="search"></label>
                    <input type="text" id='search'/>

                    <button type='submit'>Search</button>
                </form>
            </div>
        </section>
    </main>
  )
}

export default Landing