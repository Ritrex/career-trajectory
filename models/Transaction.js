const mongoose=require('mongoose')
const {Schema,model}=mongoose


const transactionSchema=new Schema({
  //check if buyer._id !== provider._id
  buyerid:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'User'  
  },

  providerid:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  saleid:{
    type:Schema.Types.ObjectId,
    required:true
  },

  state:{
    type:String,
    required:true,
    enum:['negotiation','to be cofirmed','confirmed','cancelled']
  }
})



module.exports=model("Transaction",transactionSchema)