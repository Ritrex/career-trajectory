const mongoose=require('mongoose')
const {Schema,model}=mongoose


const salesSchema=new Schema({
  userid:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  itemid:{
    type:Schema.Types.ObjectId,
    ref:'Item',
    required:true
  },

  //end date must be at least 7 days apart from the 
  end_date:{
    type:Date,
    default:Date.now(),
    required:true
  },
  
  prefered_locations:{
    type:[{type:Schema.Types.ObjectId,}]

  }
},{timestamps:true})


module.exports=model("Sale",salesSchema)