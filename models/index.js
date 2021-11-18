const databaseConfig = requere("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelizeOptions = {dialect: databaseConfig.dialect };
const sequelizeDatabase = new Sequelize(databaseConfig.conectionStringUrl, ) // pode receber parametros

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase
};

const artigosModel = require("./artigos.model.js") (sequelizeDatabase, Sequelize) //vai procurar o arquivo na pasta
database.artigos = artigosModell("./artigos.model.js") (sequelizeDatabase, Sequelize) //vai procurar o arquivo na pasta

module.exports = database;