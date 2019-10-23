const item = require('../models/Item')


exports.createItem=(req,res)=>{
  let {name,price,associated_categories,event_date,src_url_public,src_url_private}=req.body
  item.create({name,price,associated_categories,event_date,src_url_public,src_url_private})
  .then(sucess=>{
    res.redirect('/perfil')
  })
  .catch(error=>{
    res.render('item',error)
  })
}

exports.deleteItem=(req,res)=>{
  let {id}=req.params
  item.findByIdAndDelete(id).then(success=>{
    res.render('perfil')
  })
  .then(error=>{
    res.redirect('/item/'+id)
  })

}

exports.updateItem=(req,res)=>{
  let {id}=req.params
  let item1 = item.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(newitem=>
    res.render('item',{item:newitem})
    )
}


exports.getItem=(req,res)=>{
  let {id}=req.params
  item.findById(id)
  .then(founditem=>{
    return founditem
  })
  .catch(error=>{return undefined
  })
}