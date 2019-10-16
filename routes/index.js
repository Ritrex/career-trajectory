const express = require('express');
const router  = express.Router();
const User =require('../models/User')
const Seeker=require('../models/Seeker')
const passport=require('passport')
const pass_loc_mong=require('passpor-local-mongoose')
const bcrypt=require('bcrypt')
const passport = require("passport");

//Nota, hacer los propios
//Passport #DevidProductions 
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// module.exports = passport;

//Funciones para autheticación: sorry Deivid, ahorita hago los míos
//#Deivid Productions
// exports.isAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect("/login");
// };
// exports.restrictAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return res.redirect("/profile");
//   }
//   return next();
// };

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/login',(req,res)=>{
  let{email,password}=req.body
  console.log()
  res.render('login')
})

router.post('/login',(req,res)=>{
  let{name:username,password}=req.body
  console.log("001",req.body)
  User.findOne({username})
  .then(user=>{
    console.log(user)
    if(user===null)
      res.render('/')
    let saltedpass=bcrypt.hashSync(password,bcrypt.genSaltSync(process.env.SALT))
    //I know, jsut give me some time
    if(user.password===saltedpass)
      res.redirect('/index',{title:`Hi ${user.username}`,user})
  })
  .catch(error=>{
    console.log(error)
    res.redirect('/',{title:'Can\'t log in',error})
  })
})

router.get('/signup',(req,res)=>{
  let{email,password}=req.body
  console.log()
  res.render('signup')
})

router.post('/signup',(req,res)=>{
  const{name:username,email,password}=req.body
  if(!username||!email||!password)
    res.render('signup',{title:'Instrucions Unclear',error:'Missing signup info'})
  let hashedpass=bcrypt.hashSync(password,bcrypt.genSaltSync(process.env.SALT))
  //console.log("!",username,email,password)
  console.log("All info was provided")
  User.create({username,hashedpass}).then(user=>{
    console.log(user)
    res.render('index',{user,title:"Hi!"})
    
  }).catch(error=>{
    console.log(error)
    res.render('signup',{title:'Oh No',error})
  })
  
})

module.exports = router;
