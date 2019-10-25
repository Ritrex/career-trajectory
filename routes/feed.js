const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sale = require("../models/Sale");
const Bid = require("../models/Bid");

/* GET home page */
router.get("/feed", (req, res, next) => {
  //Esto es para las cosas random
  let promesamisventas = Sale.findOne({ userid: req.user._id })
    .populate("userid")
    .populate("bids");

  let otrasrandom = Sale.find()
    .limit(3)
    .populate("userid");

  // Sale.find()
  // .limit(3)
  // .populate("userid")
  // .populate("bids")
  // .sort({ createdAt: -1 })
  // .then(sales => {
  //   console.log(sales);
  //   // res.status(200).json({ sales });
  //   res.render("feed", { sales });
  // })
  // .catch(err => console.log("hay un error en ", err));
  //let promesaofertas=  Bid.find({ $or: [{ buyerid: req.user._id }, { creatorsid: req.user._id }] })
  let promesaofertas = Bid.find({ buyerid: req.user._id })
    .limit(3)
    .populate("creatorid")
    .populate("buyerid")
    .populate("saleid")
    .sort({ createdAt: -1 });

  Promise.all([promesamisventas, otrasrandom, promesaofertas])
    .then(valores => {
      let misvent = valores[0];
      let otrasrand = valores[1];
      let misofer = valores[2];
      res.render(feed, { misvent, misofer, otrasrand });
    .sort({ createdAt: -1 })
    .then(sales => {
      console.log(sales);
      // res.status(200).json({ sales });
      res.render("feed", { sales,user:req.user });
    })
    .catch(err => {
      res.redirect("/error");
      console.log(err);
    });
  // //
  // .then(bids => {
  //   let loqueofrezco=[]
  //   let loquevendo=[]
  //   bids.forEach(element => {
  //     if(element.creatorid===req.user._id)
  //       loquevendo.push(element)
  //     else
  //       loqueofrezco.push(element)
  //   });
  //   console.log(bids);
  //   res.render("detail", { loquevendo,loqueofrezco });
  // })
  // .catch(err => console.log("hay un error en", err));
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
