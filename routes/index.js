const express = require('express');
const router  = express.Router();
const User =require('../models/User')
const Sale = require('../models/Sale')
const passport=require('passport')
const bcrypt=require('bcrypt')


// passport.use(Sale.createStrategy())

// app.use(passport.initialize());
// app.use(passport.session());

/* GET home page */
router.get('/', (req, res, next) => {

  res.render('index');
});


module.exports = router;
