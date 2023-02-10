const { Model, datatypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class category extends Model {}

category.init(
    {
        //define columns
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true'
        underscore: true,
        modelName: 'category',
    }
);