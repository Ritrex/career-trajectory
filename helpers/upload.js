const express=require('express')
const cloudinary=require('cloudinary')
const multer=require('multer')
const multer_cloud=require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

const storage=multer_cloud({
  cloudinary,
  folder:"uploads",
  allowedFormats:["jpg","png","jpeg","bmp"],
  filename: function(req,res,file){
    cb(null,file.orginalname)
  }

})


module.exports=multer({storage})