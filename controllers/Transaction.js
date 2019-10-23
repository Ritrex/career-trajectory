
const User=require('../models/User')
const Bid=require('../models/Bid')
const Transaction=require('../models/Transaction')

exports.createTransaction=(req,res)=>{
  let {buyerid,providerid,saleid}=req.body
   Transaction.create({buyerid,providerid,saleid,state:'negotiation'})
  .then(sucess=>{
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('perfil',error)
  })
}

exports.deleteTransaction=(req,res)=>{
  let {id}=req.params
  Transaction.findByIdAndDelete(id).then(success=>{
    res.render('perfil')
  })
  .then(error=>{
    res.redirect('/perfil')
  })

}

exports.updateTransaction=(req,res)=>{
  let {id}=req.params
  let Transaction1 = Transaction.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(Transaction=>
    res.render('perfil',{Transaction:Transaction})
    )
}


exports.getTransaction=(req,res)=>{
  let {id}=req.params
  Transaction.findById(id)
  .then(foundTransaction=>{
    return foundTransaction
  })
  .catch(error=>{
    return undefined
  })
}