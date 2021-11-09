const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Experience extends Model {}

Experience.init({
    employer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    job_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Experience