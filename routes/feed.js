const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");

/* GET home page */
router.get("/feed", (req, res, next) => {
  Sale.find()
    .limit(3)
    .populate("userid")
    .sort({ createdAt: -1 })
    .then(sales => {
      console.log(sales);
      // res.status(200).json({ sales });
      res.render("feed", { sales });
    })
    .catch(err => console.log("hay un error en ", err));
  /*let sale = {
    userid: "5db11f08d9cb1e26b9ea6eef",
    item: {
      event_date: "January 05, 2020 20:00:00",
      src_url_public: "ass.jpg",
      src_url_private: "ddd.jpg"
    },
    end_date: "December 24, 2019 10:30:00",
    min_price: 1800,
    max_price: 2000,
    name: "Disney On Ice Frozen",
    arena: "Arena Ciudad de México",
    prefered_locations: {
      lugar: "Metro Auditorio Nacional",
      horario: "13:30"
    }
  };
  console.log('req.user',req.user)
  res.render("feed",{user:req.user});
});


  Sale.create({ ...sale })
    .then(() => {
      console.log("acabas de crear una subasta nueva");
    })
    .catch(err => {
      console.log("este es el error", err);
    });*/
});

module.exports = router;
