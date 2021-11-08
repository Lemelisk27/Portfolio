const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Project} = require("../../models")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    User.findAll({
        attributes: ["username"],
        include:[Project]
    }).then(userData=>{
        const hbsUser = userData.map(user=>user.get({plain:true}))
        res.json(hbsUser)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.post("/newproject",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Project.create({
        title:req.body.title,
        description:req.body.description,
        github_url:req.body.github_url,
        site_url:req.body.site_url,
        UserId:req.session.user.id
    }).then(newProject=>{
        res.json(newProject)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(newProject)
    })
})

router.put("/updateproject",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Project.update({
        title:req.body.title,
        description:req.body.description,
        github_url:req.body.github_url,
        site_url:req.body.site_url
    },
    {
        where: {
            id:req.body.id
        }
    }).then(updateProject=>{
        res.json(updateProject)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.delete("/deleteproject",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Project.destroy({
        where: {
            id:req.body.id
        }
    }).then(deleteProject=>{
        res.json(deleteProject)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.put("/projectimg",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Project.update({
        img:req.body.img
    },
    {
        where: {
            title:req.body.title
        }
    }).then(profileImg=>{
        res.json(profileImg)
    }).catch(err=>{
        console.log(err),
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router