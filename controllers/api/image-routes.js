const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User,Image} = require("../../models")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    User.findAll({
        attributes: ["username"],
        include:[Image]
    }).then(imgData=>{
        const hbsImg = imgData.map(img=>img.get({plain:true}))
        res.json(hbsImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Image.create({
        url:req.body.url,
        UserId:req.session.user.id
    }).then(newImg=>{
        res.json(newImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

router.delete("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    Image.destroy({
        where: {
            id:req.body.id
        }
    }).then(delImg=>{
        res.json(delImg)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"An Error Occured",err:err})
    })
})

module.exports = router