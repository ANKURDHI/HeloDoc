

module.exports = (sequelize, DataTypes) => {

    const Appointment = sequelize.define("appointment", {
        
        appComment: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        appId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,        
            allowNull: false
        },  
        appSymptom: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        patientId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },  
        doctorId: {
            type: DataTypes.BIGINT,
            allowNull: false
        }, 
        scheduleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Appointment

}