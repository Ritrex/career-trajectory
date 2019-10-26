const express = require("express");
const router = express.Router();
const upload=require('../helpers/upload')
const User = require('../models/User')
const Sale = require("../models/Sale");
const multer=require('multer')
const cloudinary=require('cloudinary')


router.get('/profile/:userid',(req,res)=>{
  let {userid}=req.params
  User.findById(userid)
  .then(user=>{

    res.render('signup',{isedit:true,user})
  })
  .catch(error=>{
    res.redirect('/')
  })
})
router.get('/profile/:userid/edit',(req,res)=>{
  res.render('signup',{user:req.user})
})

router.post('/profile/user:id/edit',(req,res)=>{
  let {name,password,conf_password,email,telefono,rfc,domicilio,intereses}=req.body
  if(!email||!password||!conf_password||!name)
    res.render('signup',{error:"No se proporcionó la información necesaria"})
  if(password!==conf_password)
    res.render('signup',{error:""})
    let foto =req.files
  
  User.findByIdAndUpdate(req.user._id, {name,password,conf_password,email,telefono,rfc,domicilio,intereses})
})
router.get('/profile/new',(req,res)=>{
  res.render('perfil')
})

router.post('/profile/new',(req,res)=>{

})


module.exports=router