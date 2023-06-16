const express= require("express");
const router=express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/addAppointment', appointmentController.addAppointment);
router.get('/getAppInfo', appointmentController.getAppInfo);


module.exports=router;