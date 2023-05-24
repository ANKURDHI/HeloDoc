
const express= require("express")
const app = express();
const cors = require('cors');

const authRoute=require("./Routes/auth");
const doctRoute=require("./Routes/docinfo")

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080
app.use('/api/patient',authRoute);
app.use('/api/docinfo',doctRoute);


app.listen(PORT,()=>{
    console.log("server is listening",PORT)
});