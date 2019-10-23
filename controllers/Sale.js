
const Sale=require('../models/Sale')

exports.createSale=(req,res)=>{
  let {prefered_locations,end_date,itemid,userid}=req.body
   Sale.create({prefered_locations,end_date,itemid,userid})
  .then(sucess=>{
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('perfil',error)
  })
}

exports.deleteSale=(req,res)=>{
  let {id}=req.params
  Sale.findByIdAndDelete(id).then(success=>{
    res.render('perfil')
  })
  .then(error=>{
    res.redirect('/perfil')
  })

}

exports.updateSale=(req,res)=>{
  let {id}=req.params
  let Sale1 = Sale.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(Sale=>
    res.render('perfil',{Sale:Sale})
    )
}


exports.getSale=(req,res)=>{
  let {id}=req.params
  Sale.findById(id)
  .then(foundSale=>{
    return foundSale
  })
  .catch(error=>{
    return undefined
  })
}