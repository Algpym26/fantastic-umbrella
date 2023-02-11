// import important parts of sequelize library
const { Model, DataTypes, INTEGER, STRING } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: INTEGER,
      allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
    },
    Product_Name:{type: STRING},
    product_Price:{type:INTEGER},
    produce_Stock:{type, INTEGER},
    

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
