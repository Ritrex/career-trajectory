const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/feed", (req, res, next) => {
  console.log('req.user',req.user)
  res.render("feed",{user:req.user});
});



module.exports = router;
