const databaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelizeOptions = { dialect: databaseConfig.dialect };
const sequelizeDatabase = new Sequelize(databaseConfig.connectionStringUrl, sequelizeOptions); // pode receber parametros

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

const artigosModel = require("./artigos.model.js")  //vai procurar o arquivo na pasta
database.artigos = artigosModel(sequelizeDatabase, Sequelize); //vai procurar o arquivo na pasta

module.exports = database;