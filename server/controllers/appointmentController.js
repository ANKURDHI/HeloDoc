const db = require('../models')
const Appointment = db.appointment


// add appointment
const addAppointment = async (req, res) => {
    console.log(req.body.patienPhone);

    let info = {
        appComment: req.body.appComment,
        appId: req.body.appId,
        appSymptom: req.body.appSymptom,
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        scheduleId: req.body.scheduleId,
        status: req.body.status,
        

        
    }
try{

    const appointment = await Appointment.create(info)
    res.status(200).send("Information Added")
    console.log(appointment)
}catch(e){
    console.log(e);
}

}
// get information

const getAppInfo= async (req, res) => {

    let AppInfo = await Appointment.findAll({})
    res.status(200).send(AppInfo)

}

module.exports = {
    addAppointment,
    getAppInfo
    
}