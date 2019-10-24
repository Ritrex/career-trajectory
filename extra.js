const by = require("bcryptjs");
const salt = process.env.SALT;
const app = require("./app");
const password = "p4ssw0rd";
let hash = by.hashSync(password, by.genSaltSync(salt));
console.log(hash);
console.log(
  by.compareSync(
    salt,
    "$2a$12$/jojgCVhldyim6zlsl/NY.IMze8xFInHkNC6R/9Es1kAVn9j5XQDu"
  )
);

app.post("/signup", (req, res) => {
  let newusr = User({ email: "gusanopatas@abc.com", username: "jacobo" });
  User.register(newusr, { password: "abc" }).then(succ => {
    console.log(succ);
    Console.log("Saved sucessfully");
  });
});
