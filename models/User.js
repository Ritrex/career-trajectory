const mongoose=require('mongoose')
const {Schema,model}=mongoose


const UserSchema=new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  last_login:{
    type:Date,
    default:Date.now()
  },

  sales:{
    type:[Schema.Types.ObjectId],
    ref:'Sale'
  },
  
  number_of_sales:{
    type:Number,
    required:true,
    default:0
  },

  number_of_succesful_sales:{
    type:Number,
    required:true,
    default:0
  },

  number_of_acquisitions:{
    type:Number,
    required:true,
    default:0
  }

},{timestamps:true})




module.exports=model("User",UserSchema)
