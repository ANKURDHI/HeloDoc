const express= require("express")
const cors = require('cors');
const PORT = process.env.PORT || 8080

const authRoute=require("./Routes/auth");
const doctRoute=require("./Routes/docinfo")
const doctorRoute=require("./Routes/doctor")
const appointmentRoute=require("./Routes/appointment")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/patient',authRoute);
app.use('/api/docinfo',doctRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/appointment',appointmentRoute);


app.listen(PORT,()=>{
    console.log("server is listening",PORT)
});