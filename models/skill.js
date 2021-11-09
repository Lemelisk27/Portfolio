const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {}

Skill.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    skills: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Skill