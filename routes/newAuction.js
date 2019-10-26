const express = require("express");
const router = express.Router();
const updloader = require("../helpers/upload");
const Sale = require("../models/Sale");
/* GET home page */
router.get("/newAuction/new", (req, res, next) => {
  res.render("newAuction", { register: true, user: req.user });
});

router.post(
  "/newAuction/new",
  updloader.fields([
    { name: "ticket_full", maxCount: 1 },
    { name: "ticket_partial", maxCount: 1 },
    { name: "ticket_detail", maxCount: 1 }
  ]),
  (req, res) => {
    console.log(
      "Did you get what I sent you?:",
      req.files["ticket_partial"],
      req.files["ticket_detail"]
    );
    //req.files.map(file=>file.secure_url)
    //  req.files.map()
    //console.log(req.file,req.files,res.body);
    let { name, event_date, event_arena, min_price, max_price } = req.body;
    //let {place_one,place_two,place_three}=req.body
    let {
      place_one,
      time_one,
      place_two,
      time_two,
      place_three,
      time_three
    } = req.body;

    let item = {
      event_date,
      src_url_public: req.files["ticket_partial"][0].secure_url,
      src_url_private: req.files["ticket_full"][0].secure_url,
      prefered_locations: [
        { lugar: place_one, horario: time_one },
        { lugar: place_two, horario: time_two },
        { lugar: place_three, horario: time_three }
      ]
    };
    let sale = {
      item,
      event_arena,
      min_price,
      max_price,
      name,
      userid: req.user._id
    };
    Sale.create(sale)
      .then(succ => {
        console.log("venta arriba");
        res.redirect("/");
      })
      .catch(error => {
        console.log(error);
        res.redirect("/newAuction/new");
      });
  }
);
module.exports = router;
