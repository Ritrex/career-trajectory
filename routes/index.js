const express = require("express");
const exp_session = require("express-session");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const uploader = require("../helpers/upload");
const cloudinary = require("cloudinary");
const MongoStore = require("connect-mongo");
const Saleops=require('../controllers/Sale.js')
/* GET home page */
/*
test image, should you need it

https://res.cloudinary.com/dgxxe9vi3/image/upload/v1570586894/test/c5ce4e39f7a4131753bd9255f1cdffc8.jpg

*/
router.get("/", (req, res, next) => {
  //<console.log(req.session);
  console.log(req.query.search)
  if(req.query.search===undefined)
    Saleops.getRandomSales()
      .then(sales => {
        console.log(sales);
      // res.status(200).json({ sales });
        res.render("index", { sales,user:req.user });
      })
      .catch(err => console.log("hay un error en ", err));
  else{
    let query=[]
    query.map
    req.query.search.split(",").forEach(element => {
      let splittedString= element.split(" ")
      splittedString.map((val)=>query.push(val))
    });
    console.log(query) 
    let terms={}
    query.forEach()
    let dbquery={$or:[]}


  }
    /* Sale.findOne()
    .populate("userid")
    .populate("itemid")
    .then(sale => {
      res.render("layout", { sale });
    })
    .catch(error => {
      console.log("NO sales found");
      res.render("index", { error });
    });
  res.render("index", {
    img: cloudinary.url("c5ce4e39f7a4131753bd9255f1cdffc8.jpg")
  });*/
  //res.render("index");
});

router.post("/",(req,res)=>{
  let {search}=req.body
  console.log(search,search.split(','))
  res.redirect("/",200)
})
module.exports = router;
