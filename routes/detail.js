const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/detail", (req, res, next) => {
  res.render("detail");
});

module.exports = router;
