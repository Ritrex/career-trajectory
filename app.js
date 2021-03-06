require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session=require('express-session')
const passport     = require('./helpers/auth')
const MongoStore = require("connect-mongo")(session);


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

// Middleware Setup a
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
  secret:process.env.SECRET,
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge:600000},
  store: new MongoStore({
  mongooseConnection: mongoose.connection,
          ttl: 24 * 60 * 60 *1000
  })
})
)
app.use(passport.initialize())
app.use(passport.session())

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


const index = require("./routes/index");
const newAuct = require("./routes/newAuction");
const auctDetail = require("./routes/detail");
const feed = require("./routes/feed");
const auth = require("./routes/auth");
const item = require("./routes/item");
const profile = require("./routes/profile");
const sales = require("./routes/sales");
app.use("/", index);
app.use("/", newAuct);
app.use("/", auctDetail);
app.use("/", feed);
app.use("/", auth);
app.use("/", item);
app.use("/", profile);
app.use("/", sales);
//R

module.exports = app;
