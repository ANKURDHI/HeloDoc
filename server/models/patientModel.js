module.exports = (sequelize, DataTypes) => {

    const Patient = sequelize.define("patient", {
        patientId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,        
            allowNull: false

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientDOB: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        patientEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientGender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientMaritialStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientPhone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    })

    return Patient

}