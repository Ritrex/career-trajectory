
const Sale=require('../models/Sale')

module.exports.createSale=(req,res)=>{
  let {prefered_locations,end_date,itemid,userid}=req.body
  let item = createItem(req,res)
   Sale.create({prefered_locations,end_date,item,userid})
  .then(sucess=>{
    sucess.item=item
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('perfil')
  })
}

module.exports.deleteSale=(req,res)=>{
  let {id}=req.params
  Sale.findByIdAndDelete(id).then(success=>{
    res.redirect('/perfil')
  })
  .then(error=>{
    res.redirect('/perfil')
  })

}

module.exports.updateSale=(req,res)=>{
  let {id}=req.params
  let Sale1 = Sale.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(Sale=>
    res.redirect('/perfil')
    )
}


module.exports.getSale=(req,res)=>{
  let {id}=req.params
  Sale.findById(id)
  .then(foundSale=>{
    return foundSale
  })
  .catch(error=>{
    return undefined
  })
}


module.exports.getRandomSales=()=>{
  Sale.find().limit(3)
}