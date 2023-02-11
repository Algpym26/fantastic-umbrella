const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize (
  process.env.var_Name,
  process.env.var_User,
  process.env.var_Password,
  {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
       
  }
);

module.exports = sequelize;
