const express= require("express");
const router=express.Router();


const docinfoController = require('../controllers/docinfoController')

router.post('/addDocInfo', docinfoController.addDocInfo);

router.get('/getdocinfo', docinfoController.getdocinfo);


module.exports=router;