const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new sequelize (
  process.env.varName,
  process.env.varUser,
  process.env.varPassword,
  {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
       
  }
);

module.exports = sequelize;
