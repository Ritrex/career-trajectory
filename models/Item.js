const mongoose=require('mongoose')
const {Schema,model}=mongoose


const ItemSchema=new Schema({
  name:{
    type:String,
    required: true
  },
  associated_categories:{
    type:[String],
    default:[]
  },
  price:{
    type:Number,
    required:true,
    default:0
  },
  event_date:{
    type:Date,
    required:true
  },
  src_url_public:{
    type:String,
    required:true
  },
  src_url_private:{
    type:String,
    required:true
  }
})

module.exports=model("Item",ItemSchema)