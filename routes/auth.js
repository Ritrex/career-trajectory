const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require('passport')
const bcrypt = require('bcryptjs')
const bcryptsalt = 10


const upload=require('../helpers/upload')
//Missing: Make sure user is no logged in
router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.post('/signup',(req,res)=>{
  let {username,password}=req.body
  
  res.redirect('/')
})

router.get('/login',(req,res)=>{
  let {username,password}=req.body
  //req.isAuthenticated()
  res.render('login')
})

router.post('/login',(req,res)=>{
  let{password,username}=req.body

  User.findOne({username})
  .then()
  .catch()
})

module.exports=router;