const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/newAuction", (req, res, next) => {
  res.render("newAuction");
});

module.exports = router;
