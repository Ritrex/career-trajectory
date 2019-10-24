const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale")
const multer = require('multer')
const passport = require('../helpers/auth')
const cloudinary =require('cloudinary')
const mult_cloud=require('multer-storage-cloudinary')
const bcrypt = require('bcryptjs')

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

router.post('/signup',upload.single('foto'),(req,res)=>{
  let {name,password,conf_password,email,telefono,rfc,domicilio,intereses}=req.body
  //let foto=req.files.map(file=>file.secure.url)
  console.log(req.body)
  if(!email||!password||!conf_password||!name)
    res.render('signup',{error:"No se proporcionó la información necesaria"})
  if(password!==conf_password)
    res.render('signup',{error:""})
    //VAlidación aquí
  
  let username= name
  
  User.register({username, email},password).then(succ=>{
    console.log('SUCCESS!',succ)
    res.render('index',{succ})
  })
  .catch(error=>{
    console.log('lo que quier',error)
    res.render('signup')
  })
  //User.create({username,password,conf_password,telefono,rfc,domicilio,intereses})
})

router.get('/login',(req,res)=>{
  //req.isAuthenticated()

  res.render('login',{user:req.user})
})

router.post('/login',(req,res)=>{
  
  //passport.authenticate
  //req.use={username:name,password}
  //console.log(passport.)
  passport.authenticate("local", (err, user, info = {}) => {
    
    const { message: errorMessage } = info;
    console.log("logged ",err, user,info)
    if (errorMessage) {
      console.log('error ',errorMessage)
      return res.render("login", { errorMessage });
    }

    req.login(user, err => {
      console.log("logged in succesfully",user)
      
      res.redirect("/feed");
    });
  })(req, res);
  
})


router.get("/logout",(req,res)=>{
  req.logout()
  res.redirect("/login")
})
module.exports=router;