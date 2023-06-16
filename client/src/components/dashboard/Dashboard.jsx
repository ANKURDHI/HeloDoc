import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from './Sidebar'
import "./Dashboard.css"
import Footer from '../footer/Footer'

const roleOptions = {
  "admin": ['1','2','3'],
  "doctor": ['4','5','6'],
  "patient": ['7','8','9']
}

const Dashboard = ({role}) => {
  return (
    <section className="dashboard">
      <Navbar/>
      <Sidebar roleOptions={roleOptions} role={role}/>
      <Footer/>
    </section>
  )
}

export default Dashboard