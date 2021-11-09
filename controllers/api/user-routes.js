const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const {User} = require("../../models")
const bcrypt = require("bcrypt")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    User.findAll()
    .then(userData=>{
        const hbsUser = userData.map(user=>user.get({plain:true}))
        res.json(hbsUser)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({messgae:"An Error Occured",err:err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where: {
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            res.redirect("/api/login")
        }
        else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    email:foundUser.email,
                    id:foundUser.id
                }
                res.json(foundUser)
            }
            else{
                res.redirect("/api/login")
            }
        }
    })
})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/api/login")
})

router.put("/", async (req,res)=>{
    if(!req.session.user){
        res.redirect("/api/login")
        return
    }
    let updatedPassword = ""
    if(req.body.password){
        updatedPassword = await bcrypt.hash(req.body.password,10)
        User.update(
            {
                password:updatedPassword
            },
            {
                where: {
                    id:req.session.user.id
                }
            }
        ).then(updatePass=>{
            res.json(updatePass)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occurer",err:err})
        })
    }
    else {
        User.update(
            {
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                profile_pic:req.body.profile_pic,
                bio:req.body.bio,
                phone:req.body.phone,
                linkedin:req.body.linkedin,
                github:req.body.github,
                street:req.body.street,
                city:req.body.city,
                state:req.body.state,
                zip:req.body.zip,
                portfolio:req.body.portfolio
            },
            {
                where: {
                    id:req.session.user.id
                }
            }
        ).then(updateUser=>{
            res.json(updateUser)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({message:"An Error Occured",err:err})
        })
    }
})

module.exports = router