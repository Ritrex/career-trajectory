const express = require("express");
const router = express.Router();
const Bid = require('../models/Bid')
const Item = require('../models/Item')
const Sale=require('../models/Sale')
const User=require('../models/User')
const mongoose = require('mongoose')
const uploader = require('../helpers/upload')
const cloudinary = require('cloudinary')
const multer=require('multer')
const multer_cloud=require('multer-storage-cloudinary')


router.post('/detail/:saleid',(req,res)=>{
  const {saleid}=req.params
  const buyerid=req.user._id
  const named_price=req.body
  Bid.create({saleid,buyerid,named_price})
  .then(succ=>{
    res.redirect("/")
  })
  .catch(error=>{
    console.log("Unable to bid item",error)
    res.redirect("/feed")
  })
})

/*
router.get('/item/:itemid',(req,res)=>{

})

router.get('/item/new',(req,res)=>{
  res.render('newAuction')
})

router.post('/item/new',(req,res)=>{
  let {name,price,event_date}=req.body
  //precio arbitario
  if(price>5000)
    return
  
  Item.create({name,price,event_date})
  .then(result=>{
    res.render('perfil')
  })
  .catch(error=>{
    res.render('perfil',{error})
  })
})

router.get('/item/:itemid/edit',(req,res)=>{
  let {itemid}=req.params
  Item.findById(itemid)
  .then(item=>{
    res.render('item',{item})
    
  })
  .catch(error=>{
    res.render('item',{error})
  })

})

router.post('/item/:itemid/edit',(req,res)=>{

})
// router.get('/item/:itemid/delete',(req,res)=>{

// })

router.post('/item/:itemid/delete',(req,res)=>{

})
*/
module.exports=router