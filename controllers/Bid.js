const User=require('../models/User')
const Bid=require('../models/')
const Sale=require('../models/Sale')
exports.createBid=(req,res)=>{
  let {buyerid,saleid,named_price}=req.body
   Bid.create({buyerid,saleid,named_price})
  .then(sucess=>{
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('perfil',error)
  })
}

exports.deleteBid=(req,res)=>{
  let {id}=req.params
  Bid.findByIdAndDelete(id).then(success=>{
    res.render('perfil')
  })
  .then(error=>{
    res.redirect('/perfil')
  })

}

exports.updateBid=(req,res)=>{
  let {id}=req.params
  let bid1 = Bid.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(bid=>
    res.render('perfil',{bid:bid})
    )
}


exports.getBid=(req,res)=>{
  let {id}=req.params
  Bid.findById(id)
  .then(foundbid=>{
    return foundbid
  })
  .catch(error=>{
    return undefined
  })
}