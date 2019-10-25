const express = require("express");
const router = express.Router();
const updloader=require('../helpers/upload')
/* GET home page */
router.get("/newAuction", (req, res, next) => {
  res.render("newAuction",{register:true});
});

router.post('/newAuction',updloader.fields({name:"ticket_full",maxCount:1},
  {name:"ticket_partial",maxCount:1}),(req,res)=>{
    console.log(req.body)
    res.render('index')
    //createSale(req,res)
  })
module.exports = router;
