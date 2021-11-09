const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Education extends Model {}

Education.init({
    name: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    ed_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ed_end_date: {
        type: DataTypes.DATEONLY,
        allowNull:false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Education