
const express= require("express")
const app = express();
const cors = require('cors');

const authRoute=require("./Routes/auth");
const doctRoute=require("./Routes/docinfo")
const doctorRoute=require("./Routes/doctor")
const appointmentRoute=require("./Routes/appointment")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080
app.use('/api/patient',authRoute);
app.use('/api/docinfo',doctRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/appointment',appointmentRoute);


app.listen(PORT,()=>{
    console.log("server is listening",PORT)
});