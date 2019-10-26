const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const Bid = require("../models/Bid");

/* GET home page */
router.get("/detail", (req, res, next) => {
  Bid.find()
    .limit(3)
    .populate("creatorid")
    .populate("buyerid")
    .populate("saleid")
    .sort({ createdAt: -1 })
    .then(bids => {
      console.log(bids);
      res.render("detail", { bids });
    })
    .catch(err => console.log("hay un error en", err));

  // let bid = {
  //   creatorid: "5da659dfa134f45c60a5716c",
  //   buyerid: "5db103eb9badd341bcc5ace9",
  //   saleid: "5db11b9d8ad60f5413fc3e6a",
  //   named_price: 1800
  // };

  // Bid.create({ ...bid })
  //   .then(() => {
  //     console.log("acabas de crear una oferta nueva", bid);
  //   })
  //   .catch(err => {
  //     console.log("este es el error", err);
  //   });
});

module.exports = router;
