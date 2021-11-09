const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Degree extends Model {}

Degree.init({
    degree: {
        type:DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Degree