
module.exports = {
    HOST: "localhost",
    USER: "new",
    PASSWORD: "Dolphine",
    DB: "db_healthcare1",
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
}