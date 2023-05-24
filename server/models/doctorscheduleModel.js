module.exports = (sequelize, DataTypes) => {

    const Doctorschedule = sequelize.define("doctorschedule", {
        
        bookAvail: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        endTime: {
            type: DataTypes.TIME,
            allowNull: false
        },  
        scheduleDate: {
            type: DataTypes.DATE,
            allowNull: false
        },  
        scheduleDay: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        scheduleId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,        
            allowNull: false
        },
        doctorId: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        }
    })

    return Doctorschedule

}