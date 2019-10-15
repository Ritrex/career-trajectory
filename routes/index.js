const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/login',(req,res)=>{
  let{email,password}=req.body
  console.log()
  res.render('login')
})

router.post
module.exports = router;
