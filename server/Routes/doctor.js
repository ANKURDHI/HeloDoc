const express= require("express");
const router=express.Router();

const data = require("./doctors.json");


router.get('/getdoctors',async(req,response)=>{
    res.status(200).json(data)
    
});

module.exports=router;