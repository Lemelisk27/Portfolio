const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User} = require("../models")

router.get("/",(req,res)=>{
    User.findOne({
        where: {
            id:1
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("homepage",{
            user:hbsUser
        })
    })
})

module.exports = router