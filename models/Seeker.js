const mongoose=require('mongoose')
const {Schema,model}=mongoose


const SeekerSchema=new Schema({
  userid:{
    type:Schema.Types.ObjectId,
    required:true
  },
  skills:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"Skill",
    default:[]
  },
  email:{
    type:String,
    required:true 
  }

},{timestamps:true})


module.exports=model("Seeker",SeekerSchema)