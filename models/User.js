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
  }
  
},{timestamps:true})




module.exports=model("User",UserSchema)
