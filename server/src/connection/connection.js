// const dbConfig = require("./database");

const Sequelize = require("sequelize");
const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "demo",
    username: "root",
    password: null,
synchronize: false,
});



module.exports = {connection};