const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init({
    role: {
        type: DataTypes.TEXT,
        allowNull:false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Role