const { notDeepEqual } = require('assert');
const { Model, datatypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class category extends Model {}

category.init(
    {
        //define columns
        id:{
            type:INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,


        },

            category_Name:{
                type: String,
                
            }

                
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore: true,
        modelName: 'category',
    }
);