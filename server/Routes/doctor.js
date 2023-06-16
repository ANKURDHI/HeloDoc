const express= require("express");
const router=express.Router();



const doctorController = require('../controllers/doctorController')

router.post('/addDoc', doctorController.addDoc);
router.post('/checkDoctor', doctorController.checkDoctor);

module.exports=router;