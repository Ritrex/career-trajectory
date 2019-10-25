const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/feed", (req, res, next) => {
  console.log('req.user1',req.user)
  res.render("feed",{user:req.user,infeed:true});
});



module.exports = router;
