const express = require("express");
const router = express.Router();
const upload=require('../helpers/upload')
const User = require('../models/User')
const Sale = require("../models/Sale");
const multer=require('multer')
const cloudinary=require('cloudinary')
const mult_cloud=require('multer-storage-cloudinary')
const uploader=require('../helpers/upload')


router.get('/profile/:userid',uploader.single('foto'),(req,res)=>{
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
  
})

router.post('/profile/:userid/edit',uploader.single('foto'),(req,res)=>{
  console.log("jump of faith")
  let fotos =req.body.foto
  console.log("Fotos:\n",fotos,req.file,req.files)
  console.log("Info de usuario:\n",req.body)
  
  res.render('signup',{user:req.user})
  let {name,password,conf_password,email,telefono,rfc,domicilio,intereses}=req.body
  if(!email||!password||!conf_password||!name)
    res.render('signup',{error:"No se proporcionó la información necesaria"})
  if(password!==conf_password)
    res.render('signup',{error:"Password fields must match"})
  //  let foto =req.files
  //onsole.log(foto)
  //User.findByIdAndUpdate(req.user._id, {name,password,conf_password,email,telefono,rfc,domicilio,intereses})
})

router.get('/profile/',(req,res)=>{
  res.render('perfil')
})

router.post('/profile/delete',(req,res)=>{
  User.findByIdAndDelete(req.user._id)
  .then(user=>{
    res.redirect("/")
  })
  .catch(error=>{
    res.redirect(`/profile/${req.user._id}/edit`)
  })
})


module.exports=router