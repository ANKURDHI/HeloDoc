import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"
import "./Doctor.css"

const Doctors = () => {
    const [data, setData] = useState([])
    useEffect(() => {    
      const getData = async() => {
         try {
          const json = await fetch("http://localhost:8080/api/docinfo/getdocinfo");
          const response = await json.json();
          setData(response)
         } catch (error) {
           console.log(error)
         }
      }
      getData();
    }, [])
    
  return (
    <>
      <Navbar/>
        <div className="list container">
          <div className="filters">
            <span>FILTERS:</span>
            <select name="gender" id="gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
            <select name="field" id="field">
              <option value="CARDIOLOGY">CARDIOLOGY</option>
              <option value="NEUROSURGERY">NEUROSURGERY</option>
            </select>
            <select name="hospital" id="hospital">
              <option value="CARDIOLOGY">1</option>
              <option value="NEUROSURGERY">2</option>
            </select>
            <button>APPLY</button>
          </div>
          {
            data.map((doctor)=>{
                return (
                    <div className='doctor' key={doctor.doctorId}>
                       <div className="doctor-image">
                        <img src="/hero-image.avif" alt="DOC PIC" />
                       </div>
                       <div className="doctor-info">
                          <h3>{doctor.name}</h3>
                          <h4>{doctor.specialization}</h4>
                          <p>{doctor.gender}</p>
                          <p>{doctor.location}</p>
                          <p>{doctor.description}</p>
                          <button>BOOK APPOINTMENT</button>
                       </div>
                    </div>
                )
            })
          }
        </div>
      <Footer/>
    </>
  )
}

export default Doctors