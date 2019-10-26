const express = require("express");
const router = express.Router();
const updloader = require("../helpers/upload");
/* GET home page */
router.get("/newAuction/new", (req, res, next) => {
  res.render("newAuction", { register: true });
});

router.post(
  "/newAuction/new",
  updloader.fields(
    { name: "ticket_full", maxCount: 1 },
    { name: "ticket_partial", maxCount: 1 }
  ),
  (req, res) => {
    console.log(fields);
    console.log(req.body);
    let { event, event_date, event_arena, min_price, max_price } = req.body;
    //let {place_one,place_two,place_three}=req.body
    let {
      place_one,
      time_one,
      place_two,
      time_two,
      place_three,
      time_three
    } = req.body;
    res.redirect("/");
  }
);
module.exports = router;