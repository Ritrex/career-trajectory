const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const Item = require("../models/Item")
const Bid = require('../models/Bid')
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const uploader = require('../helpers/upload')
const cloudinary = require('cloudinary')




router.get('/sales/:userid/:saleid',(req,res)=>{
  let {userid,saleid}=req.params
  Sale.findById(saleid)
  .then(foundsale=>{
    let imgpromise = Item.populate(foundsale,{path:"scr_url_public"})
    let bidpromise = Bid.populate(foundsale,{path:""})
    Promise.all([imgpromise,bidpromise])
    .then(results=>{
      
      res.render('sale',{foundsale})
    })
    .catch(error=>{
      res.render('perfil',{error})
    })
  })
  .catch(error=>{
    console.log(error)
    res.redirect('/',200)
  })


})

module.exports=router