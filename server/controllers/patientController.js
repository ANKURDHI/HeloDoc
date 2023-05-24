const db = require('../models')

// const Appointment = db.appointment
// const Doctor = db.doctor
// const DoctorSchedule = db.doctorschedule
const Patient = db.patient



const getAllPatient = async (req, res) => {

    let products = await Patient.findAll({})
    res.status(200).send(products)

}



module.exports = {
    getAllPatient
    
}