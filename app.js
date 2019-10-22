require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const pug          = require('pug');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport     = require('passport')
const passport_local = require('passport-local')
const passport_local_mongoose=require('passport-local-mongoose')
//const MongoStore = require("connect-mongo")(session);



mongoose
  .connect(process.env.DB_Connection, {useNewUrlParser: true,useUnifiedTopology:true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// app.use(
//   session({
//     secret: process.env.SECRET,
//     cookie: { maxAge: 3600000 },
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: 24 * 60 * 60 // 1 day
//     })
//   })
// );


const index = require('./routes/index');
const auth= require('./routes/auth');
const Item = require('./routes/item');
const perfil=require('./routes/perfil');
const sales=require('./routes/sales');
app.use('/',index);
app.use('/',auth);
app.use('/',Item);
app.use('/',perfil);
app.use('/',sales);


module.exports = app;
