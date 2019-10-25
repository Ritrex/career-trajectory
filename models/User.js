const mongoose=require('mongoose')
const passpor_local_mongoose=require('passport-local-mongoose')
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
  email:{
    type:String,
    required:true
  },
  last_login:{
    type:Date,
    default:Date.now()
  },
  
  number_of_sales:{
    type:Number,
    required:true,
    default:0
  },


  // number_of_acquisitions:{
  //   type:Number,
  //   required:true,
  //   default:0
  // },
  rating:{type:Number,
    enum:[1,2,3,4,5],
    default:5},
  telefono:{type:String},
  intereses:{type:[String]},
    foto:{type:String},
    rfc:{type:String},
    domicilio:{type:String}
},{timestamps:true})

UserSchema.plugin(passpor_local_mongoose,{
  usernameField:"email",
  hashField:"password"
})


module.exports=model("User",UserSchema)
