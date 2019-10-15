const mongoose=require('mongoose')
const {Schema,model}=mongoose


const UserSchema=new Schema({
  username:{
    type:String,
    required:true
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


const Seeker=new Schema({
  userid={
    type:Schema.Types.ObjectId,
    required:true
  },
  skills:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"Skill",
    required:true,
    default:[]
  },
  email:{
    type:String,
    required:true 
  }

},{timestamps:true})


module.exports=model("User",UserSchema)