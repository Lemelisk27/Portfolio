const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init({
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Image