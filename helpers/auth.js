const User = require("../models/User");
const passport = require("passport");



//Passport setup
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
