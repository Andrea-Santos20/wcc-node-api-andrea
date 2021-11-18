// configuração do banco de dados

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    conecctionStringUrl: process.allowedNodeEnvironmentFlags.DB_CONECTION_STRING_URL,        
    dialect: "postgres",
};