const mongoose=require('mongoose')
const {Schema,model}=mongoose


const ItemSchema=new Schema({
  name:{
    type:String,
    required: true
  },
  associated_categories:{
    type:[Schema.Types.ObjectId],
    required:true,
    default[]
  },
  price:{
    type:Number,
    required:true,<
    default:0
  }
})