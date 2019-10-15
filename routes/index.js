const express = require('express');
const router  = express.Router();
const User =require('../models/User')
const Seeker=require('../models/Seeker')
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
  let{name:username,password}=req,body
  User.find({username,password})
  .then(user=>{
    console.log(user)
    res.redirect('/',{title:`Hi ${user.username}`,user})
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
  console.log("!",username,email,password)
  res.redirect("/signup")
  User.create({username,password}).then(user=>{
    console.log(user)
    res.redirect('/',{user,title:"Hi!"})

  }).catch(error=>{
    console.log(error)
    res.redirect('/',{title:'Oh No',error})
  })
  
})

module.exports = router;
