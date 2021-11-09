const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Resume,Skill,Experience,Role} = require("../../models")

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
                            [sequelize.fn('date_format', sequelize.col('end_date'), '%m-%Y'), 'end_date']
                        ]
                    },
                    include: [
                        {
                            model: Role
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

module.exports = router