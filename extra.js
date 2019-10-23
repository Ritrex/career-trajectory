const by=require('bcryptjs')
const salt =12
const app=require('./app')
let hash=by.hashSync("1234",by.genSaltSync(salt))
console.log(hash)
console.log(by.compareSync("1234","$2a$12$/jojgCVhldyim6zlsl/NY.IMze8xFInHkNC6R/9Es1kAVn9j5XQDu"))


app.post('/signup',(req,res)=>{
  let newusr=User({email:"gusanopatas@abc.com",username:"jacobo"})
  User.register(newusr,{password:"abc"}).then(
    succ=>{
      console.log(succ)
      Console.log("Saved sucessfully")
    }
  )
})