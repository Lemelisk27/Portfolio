const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const {User,Project,Resume,Skill,Experience,Role,Education,Degree} = require("../models")

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

router.get("/resume",(req,res)=>{
    User.findOne({
        where: {
            id:1
        },
        include:[{model: Resume,
            include: [
                {
                    model: Skill
                },
                {
                    model: Experience,
                    attributes:{
                        include: [
                            [sequelize.fn('date_format', sequelize.col('start_date'), '%m-%Y'), 'start_date'],
                            [sequelize.fn('date_format', sequelize.col('end_date'), '%m-%Y'), 'end_date']
                        ]
                    },
                    include: [
                        {
                            model: Role
                        }
                    ]
                },
                {
                    model: Education,
                    attributes:{
                        include: [
                            [sequelize.fn('date_format', sequelize.col('ed_start_date'), '%m-%Y'), 'ed_start_date'],
                            [sequelize.fn('date_format', sequelize.col('ed_end_date'), '%m-%Y'), 'ed_end_date']
                        ]
                    },
                    include: [
                        {
                            model: Degree
                        }
                    ]
                }
            ]
        }]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true})
        res.render("resume",{
            user:hbsUser
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.get("/project/:id",(req,res)=>{
    Project.findOne({
        where: {
            id:req.params.id
        }
    }).then(projectData=>{
        const hbsProject = projectData.get({plain:true})
        User.findOne({
            where: {
                id:1
            }
        }).then(userData=>{
            const hbsUser = userData.get({plain:true})
            res.render("projects",{
                user:hbsUser,
                project:hbsProject
            })
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occured",err:err})
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router