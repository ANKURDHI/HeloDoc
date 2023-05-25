const express= require("express");
const router=express.Router();

const patientController = require('../controllers/patientController');

router.post('/checkPatient', patientController.checkPatient);
router.post('/addPatient', patientController.addPatient);


module.exports=router;