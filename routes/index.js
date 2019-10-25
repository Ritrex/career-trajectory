const express = require("express");
const exp_session=require('express-session')
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const uploader = require('../helpers/upload')
const cloudinary = require('cloudinary')
const MongoStore = require('connect-mongo')

/* GET home page */
/*
test image, should you need it

https://res.cloudinary.com/dgxxe9vi3/image/upload/v1570586894/test/c5ce4e39f7a4131753bd9255f1cdffc8.jpg

*/
router.get("/", (req, res, next) => {
  console.log(req.session)
  Sale.find().limit(3).populate('userid').populate('itemid')
  .then(sale=>{ 
    res.render('index',{sales:sale,user:req.user})
  })
  .catch(error=>{
    console.log("NO sales found")
    res.render('index',{error}) 
  })
  //res.render('index',{img:cloudinary.url('c5ce4e39f7a4131753bd9255f1cdffc8.jpg')})
});

router.post("/",(req,res)=>{
  let {search}=req.body
  console.log(search)
  res.redirect("/",200)
})
module.exports = router;
