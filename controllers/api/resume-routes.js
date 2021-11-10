const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Resume,Skill,Experience,Role,Education,Degree} = require("../../models")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    User.findAll({
        attributes: ["username"],
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
                            [sequelize.fn('date_format', sequelize.col('end_date'), '%m-%Y'), 'start_date']
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
    }).then(resumeData=>{
        const hbsResume = resumeData.map(resume=>resume.get({plain:true}))
        res.json(hbsResume)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.get("/createcategory",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    const api = true
    const apipage = "/resumes/createcategory"
    res.render("createcategory",{
        api:api,
        apipage:apipage
    })
})

module.exports = router