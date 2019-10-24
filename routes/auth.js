const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale")
const multer = require('multer')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const bcryptsalt = 10
const upload=require('../helpers/upload')

//Missing: Make sure user is no logged in
router.get('/signup',(req,res)=>{
  console.log(req.session.user)
  if(!req.session.user)
    res.render('signup')
  else{
    res.redirect('/')
  }
})

router.post('/signup',upload.single(''),(req,res)=>{
  let {username,password,conf_password,telefono,rfc,domicilio,intereses}=req.body
  let {}=
  new User({}).save()
})

router.get('/login',(req,res)=>{
  //req.isAuthenticated()
  res.render('login')
})

router.post('/login',(req,res)=>{
  let{password,name:username}=req.body

  User.findOne({username})
  .then(user=>{
    let equalpasses=bcrypt.compareSync(password,user.password)
    if(equalpasses){

      res.render('perfil')
    }
    else{
      res.render("login",{msg:"datos incorrectos"})
    }
  })
  .catch(error=>{
    res.render('login',{error,msg:"no user found"})
  })
  
})

module.exports=router;