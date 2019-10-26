const express = require("express");
const router = express.Router();
const Sale=require('../models/Sale')
const Saleops=require('../controllers/Sale')
/* GET home page */
router.get("/detail/:saleid", (req, res, next) => {
  let {saleid}=req.params
  
  res.render("detail",{user:req.user});
});

module.exports = router;
