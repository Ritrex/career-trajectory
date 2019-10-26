const by=require('bcryptjs')
const salt =process.env.SALT
const app=require('./app')
let password="abc"
let hash=by.hashSync(password,by.genSaltSync(salt))
console.log(hash)
console.log(by.compareSync(password,hash))


app.post('/signup',(req,res)=>{
  let newusr=User({email:"gusanopatas@abc.com",username:"jacobo"})
  User.register(newusr,{password:"abc"}).then(
    succ=>{
      console.log(succ)
      Console.log("Saved sucessfully")
    }
  )
  });

app.post("/signup", (req, res) => {
  let newusr = User({ email: "gusanopatas@abc.com", username: "jacobo" });
  User.register(newusr, { password: "abc" }).then(succ => {
    console.log(succ);
    Console.log("Saved sucessfully");
  });
});
