const mongoose=require('mongoose')
const {Schema,model}=mongoose


const SkillSchema=new Schema({
  git_path:{
    type:String,
    required:true
  },
  skill_name:{
    type:String,
    required:true
  },
  //you still need  to add jobs id
  associated_jobs:{
    type:[Schema.Types.ObjectId],
    default:[],
    ref:"Job"
  }

})