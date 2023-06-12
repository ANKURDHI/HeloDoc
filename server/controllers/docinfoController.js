const db = require('../models')

// create main Model
const Docinfo = db.docinfo


// main work

// 1. create docinfo

const addDocInfo = async (req, res) => {
    console.log('adddocinfo');

    let info = {
        doctorId: req.body.doctorId,
        name: req.body.name,
        gender: req.body.gender,
        location: req.body.location,
        description: req.body.description,
        specialization: req.body.specialization,
        charge_per_hour: req.body.charge_per_hour 
        
    }
try{
console.log('here');
    const docinfo = await Docinfo.create(info)
    res.status(200).send(docinfo)
    console.log(docinfo)
}catch(e){
    console.log('error');
    console.log(e);
}

}



// 2. get all docinfo

const getdocinfo = async (req, res) => {
console.log("here");
    let docinfo = await Docinfo.findAll({})
    res.status(200).send(docinfo)

}



module.exports = {
    addDocInfo,
    getdocinfo
    
}