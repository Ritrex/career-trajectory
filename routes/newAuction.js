const express = require("express");
const router = express.Router();
const updloader=require('../helpers/upload')
/* GET home page */
router.get("/newAuction/new", (req, res, next) => {
  res.render("newAuction");
});

router.post('newAuction',updloader.fields({name:"ticket_full",maxCount:1},
  {name:"ticket_partial",maxCount:1}),(req,res)=>{
    console.log(fields)
    let {event,event_date,event_arena,min_price,max_price}=req.body
    let {place_one,place_two,place_three}=req.body
    
})
module.exports = router;
