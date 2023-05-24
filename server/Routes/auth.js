const express= require("express");
const router=express.Router();


const appointmentController = require('../controllers/appointmentController.js')
const doctorController = require('../controllers/doctorController')
const doctorscheduleController = require('../controllers/doctorscheduleController.js')
const patientController = require('../controllers/patientController')

router.get('/getAllPatient', patientController.getAllPatient);


module.exports=router;