
const Bid=require('../models/Bid')
const User=require('../models/User')
const bcrypt=require('bcryptjs')
exports.createUser=(req,res)=>{
  let {username,password,email,telefono}=req.body
   User.create({buyerid,providerid,saleid,state:'negotiation'})
  .then(sucess=>{
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('perfil',error)
  })
}

exports.deleteUser=(req,res)=>{
  let {id}=req.params
  User.findByIdAndDelete(id).then(success=>{
    res.render('perfil')
  })
  .then(error=>{
    res.redirect('/perfil')
  })

}

exports.updateUser=(req,res)=>{
  let {id}=req.params
  let User1 = User.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(User=>
    res.render('perfil',{User:User})
    )
}


exports.getUser=(req,res)=>{
  let {id}=req.params
  User.findById(id)
  .then(foundUser=>{
    return foundUser
  })
  .catch(error=>{
    return undefined
  })
}