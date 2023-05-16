import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"

const Doctors = () => {
    const [data, setData] = useState([])
    useEffect(() => {    
      const getData = async() => {
         const json = await fetch("http://localhost:3000/doctors");
         const response = await json.json();
         setData(response)
      }
      getData();
    }, [])
    
  return (
    <>
      <Navbar/>
        <div className="list container">
          {
            data.map((doctor)=>{
                return (
                    <div className='doctor' key={doctor.id}>
                        <p>{doctor.name}</p>
                        <p>{doctor.specialization}</p>

                        <button>BOOK APPOINTMENT</button>
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