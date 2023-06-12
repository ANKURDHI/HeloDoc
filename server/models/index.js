const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.appointment = require('./appointmentModel.js')(sequelize, DataTypes)
db.doctor = require('./doctorModel.js')(sequelize, DataTypes)
db.doctorschedule = require('./doctorscheduleModel.js')(sequelize, DataTypes)
db.patient = require('./patientModel.js')(sequelize, DataTypes)
db.docinfo = require('./docinfoModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

// 1 to Many Relation
// appointment-patient

db.patient.hasMany(db.appointment, {
    foreignKey: 'patientId',
    as: 'appointment'
})

db.appointment.belongsTo(db.patient, {
    foreignKey: 'patientId',
    as: 'patient'
})
// doctor - schedule

db.doctor.hasMany(db.doctorschedule, {
    foreignKey: 'doctorId',
    as: 'doctorschedule'
})

db.doctorschedule.belongsTo(db.doctor, {
    foreignKey: 'doctorId',
    as: 'doctor'
})
// doctor-docinfo

db.docinfo.hasOne(db.doctor, {
    foreignKey: 'doctorId',
    as: 'doctor'
})

db.doctor.belongsTo(db.docinfo, {
    foreignKey: 'doctorId',
    as: 'docinfo'
})

module.exports = db