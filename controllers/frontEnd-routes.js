const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Project} = require("../models")

router.get("/",(req,res)=>{
    User.findOne({
        where: {
            id:1
        }
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        Project.findOne({
            where: {
                UserId:1,
                primary:true
            }
        }).then(primary=>{
            const hbsPrimary = primary.get({plain:true})
            Project.findAll({
                where: {
                    UserId:1,
                    primary: false
                }
            }).then(proData=>{
                const hbsPro = proData.map(pro=>pro.get({plain:true}))
                res.render("homepage",{
                    user:hbsUser,
                    primary:hbsPrimary,
                    project:hbsPro
                })
            })
        })
    })
})

module.exports = router