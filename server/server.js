require('dotenv').config()
const express= require("express")
const app = express();
const data = require("./doctors.json")
const cors = require('cors')

app.use(cors())

app.get('/doctors',(req,res)=>{
    res.status(200).json(data)
})

app.listen(process.env.PORT,()=>{
    console.log("server is listening")
})