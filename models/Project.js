const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "https://via.placeholder.com/1450x650.png?text=Place+Holder+Image"
    },
    github_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    site_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    primary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Project