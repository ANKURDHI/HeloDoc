module.exports = (sequelize, DataTypes) => {

    const Doctor = sequelize.define("doctor", {
        doctorAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctorDOB: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        doctorEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctorFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        doctorLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctorPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctorId: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,        
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    
    })

    return Doctor

}