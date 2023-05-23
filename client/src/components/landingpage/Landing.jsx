import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'
import Accordion from '../accordian/Accordian'

const Landing = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente exexpedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
    <main>
        <section className="hero container">
            <div className="hero-content">
                <h2>Consult <span>Best Doctors</span> Your Nearby Location.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sequi officia enim perferendis dicta, nemo vel minus eveniet voluptatibus iste sit, iure id culpa debitis possimus. Eligendi impedit perspiciatis natus.</p>
                <Link to="/doctors"><button>FIND DOCTORS</button></Link>
            </div>
            <div className="hero-image">
                <img src='/banner-img.png'></img>
            </div>

            {/* <form action="#">
                <input type="text" placeholder='Search doctors,cinics,hospitals..'/>
                <input type="text" placeholder='Location'/>
                <input type="date" placeholder='Date'/>
                <button type='submit'>Search</button>
            </form> */}
        </section>

        <section className='features container'>
           <div className="features-img">
            <img src="/work-img.png" alt="feature-img" />
           </div>

           <div className="features-content">
             <p>How It Works</p>
             <h2>4 easy steps to get your solution <img src="/header-icon.svg" alt="icon" /></h2>
             <div className="feature-grid">
                <div className="feature">
                   <div className="feature-img">
                     <i class="fa-solid fa-magnifying-glass"></i>
                   </div>
                   <div className="feature-content">
                    <h3>Search Doctors</h3>
                    <p>Lorem ipsum dolor sit amet m sapiente erre qu consequatur quia ea soluta.</p>
                   </div>
                </div>
                <div className="feature">
                   <div className="feature-img">
                     <i class="fa-solid fa-magnifying-glass"></i>
                   </div>
                   <div className="feature-content">
                    <h3>Search Doctors</h3>
                    <p>Lorem ipsum dolor sit amet m sapiente erre qu consequatur quia ea soluta.</p>
                   </div>
                </div>
                <div className="feature">
                   <div className="feature-img">
                     <i class="fa-solid fa-magnifying-glass"></i>
                   </div>
                   <div className="feature-content">
                    <h3>Search Doctors</h3>
                    <p>Lorem ipsum dolor sit amet m sapiente erre qu consequatur quia ea soluta.</p>
                   </div>
                </div>
                <div className="feature">
                   <div className="feature-img">
                     <i class="fa-solid fa-magnifying-glass"></i>
                   </div>
                   <div className="feature-content">
                    <h3>Search Doctors</h3>
                    <p>Lorem ipsum dolor sit amet m sapiente erre qu consequatur quia ea soluta.</p>
                   </div>
                </div>          
             </div>
           </div>
        </section>     

        <section className='faq container'>
          <p>Get Your Answer</p>
          <h2>Frequently Asked Questions <img src="/header-icon.svg" alt="icon" /></h2>
        
          <div className="accordian">
            <div className="img">
              <img src="/faq-img.png" alt="" />
            </div>
            <div className="faqs">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
            </div>
          </div>
        </section>  
    </main>
  )
}

export default Landing