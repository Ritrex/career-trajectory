const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const uploader = require("../helpers/upload");
const cloudinary = require("cloudinary");

/* GET home page */
/*
test image, should you need it

https://res.cloudinary.com/dgxxe9vi3/image/upload/v1570586894/test/c5ce4e39f7a4131753bd9255f1cdffc8.jpg

*/
router.get("/", (req, res, next) => {
  res.render("index");
  /*Sale.findOne()
  .then(sale=>{
    User.populate()
    .then()
    .catch()
    res.render('layout',{sale})
  })
  .catch(error=>{
    console.log("NO sales found")
    res.render('index',{error}) 
  })
  res.render('index',{img:cloudinary.url('c5ce4e39f7a4131753bd9255f1cdffc8.jpg')})*/
});

module.exports = router;
