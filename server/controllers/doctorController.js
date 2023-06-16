const db = require('../models')
const Doctor = db.doctor

// adding doctor login and basic info
const addDoc = async (req, res) => {
    

    let info = {
        doctorAddress: req.body.doctorAddress,
        doctorDOB: req.body.doctorDOB,
        doctorEmail: req.body.doctorEmail,
        doctorFirstName: req.body.doctorFirstName,
        doctorLastName: req.body.doctorLastName,
        doctorPhone: req.body.doctorPhone,
        doctorId: req.body.doctorId ,
        password: req.body.password 
        
    }
try{

    const doctor = await Doctor.create(info)
    res.status(200).send(doctor)
    console.log(doctor)
}catch(e){
    console.log(e);
}

}
// doctor authentication 
const checkDoctor = async (req, res) => {

    let products = await Doctor.findOne({ where: { doctorEmail: `${req.body.doctorEmail}`,
    password: `${req.body.password}`} })
    if (products === null) {
        console.log('Not found!');
        res.status(200).send("Not Found")
      } 
      else{
        console.log(' found');
          res.status(200).send("Found")
        }

}
// update information
// const updateDocInfo = async (req, res) => {

//     let id = req.params.id

//     const product = await Product.update(req.body, { where: { id: id }})

//     res.status(200).send(product)
   

// }
module.exports = {
    addDoc,
    checkDoctor
    
}