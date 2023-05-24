module.exports = (sequelize, DataTypes) => {

    const Docinfo = sequelize.define("docinfo", {
        doctorId: {
            type: DataTypes.BIGINT,
            primaryKey: true,        
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialization: {
            type: DataTypes.STRING,
            allowNull: false
        },
        charge_per_hour: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
       
    
    })

    return Docinfo

}