const db = require('../models')

// const Appointment = db.appointment
// const Doctor = db.doctor
// const DoctorSchedule = db.doctorschedule
const Patient = db.patient

const addPatient = async (req, res) => {
    console.log(req.body.patienPhone);

    let info = {
        password: req.body.password,
        patientAddress: req.body.patientAddress,
        patientDOB: req.body.patientDOB,
        patientEmail: req.body.patientEmail,
        patientFirstName: req.body.patientFirstName,
        patientGender: req.body.patientGender,
        patientLastName: req.body.patientLastName,
        patientMaritialStatus:"None",
        patientPhone: req.body. patientPhone

        
    }
try{

    const patient = await Patient.create(info)
    res.status(200).send("Information Added")
    console.log(patient)
}catch(e){
    console.log(e);
}

}

const checkPatient = async (req, res) => {

    let products = await Patient.findOne({ where: { patientEmail: `${req.body.patientEmail}`,
    password: `${req.body.password}`} })
    if (products === null) {
        console.log('Not found!');
        res.status(404).send("Not Found")
      } 
      else{
        console.log(' found');
          res.status(200).send("Found")
          
        }
    }
const getAllPatient = async (req, res) => {
    let products = await Patient.findAll({})
    res.status(200).send(products)
}



module.exports = {
    checkPatient,
    addPatient,
    getAllPatient
    
}