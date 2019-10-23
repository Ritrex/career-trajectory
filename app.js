require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const pug          = require('pug');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const express_session=require('express-session')
const passport     = require('passport')
const passport_local = require('passport-local')
const passport_local_mongoose=require('passport-local-mongoose')
const MongoStore = require("connect-mongo")(express_session);
const User=require('./models/User')


mongoose
  .connect(process.env.DB_Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use(express_session({
  secret:process.env.SECRET,
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge:600000},
  store: new MongoStore({
  mongooseConnection: mongoose.connection,
          ttl: 24 * 3600 
        })
}))
app.use(passport.initialize())
//app.use(express_session)
app.use(passport.session())
//hola
// LocalStrategy=passport_local.Strategy
// passport.use(new LocalStrategy(User.createStrategy()))
// passport.serializeUser(User.serializeUser())
// passport.use(User.deserializeUser())
// app.use(
//   session({
//     secret: process.env.SECRET,
//     cookie: { maxAge: 3600000 },
//     resave: true,
//     
//   })
// );

const index = require("./routes/index");
const newAuct = require("./routes/newAuction");
const auctDetail = require("./routes/detail");
const feed = require("./routes/feed");
const auth = require("./routes/auth");
const item = require("./routes/item");
const profile = require("./routes/perfil");
const sales = require("./routes/sales");
app.use("/", index);
app.use("/", newAuct);
app.use("/", auctDetail);
app.use("/", feed);
app.use("/", auth);
app.use("/", item);
app.use("/", profile);
app.use("/", sales);

module.exports = app;
