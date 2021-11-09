const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model {}

Resume.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull:false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Resume