const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Resume,Skill} = require("../../models")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    User.findAll({
        attributes: ["username"],
        include:[{model: Resume,include: [{model: Skill}]}]
    }).then(resumeData=>{
        const hbsResume = resumeData.map(resume=>resume.get({plain:true}))
        res.json(hbsResume)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router