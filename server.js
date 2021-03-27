// Env
require('dotenv').config();

// Path
const path = require('path');

// Controllers
const controllers = require('./controllers');
// const routes = require('./controllers/');

// Express
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Passport
const passport = require('passport');

// Session
const sess = {
  secret: 'Secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// // PASSPORT CONFIG
// require('./config/passport')(passport)


// // const hbs = exphbs.create({ helpers });

// // Handlebars stuff, can be found in class assignments

// Middleware
app.use(session(sess))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);
// app.use(require('./controllers/hammond'));

//PASSPORT
app.use(session({
  secret: 'secret secret',
  resave: false,
  saveUninitialized: false, // don't create a session until something is stored 
  // store value here (how to use with mysql?)
}));

// PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', require('./controllers/auths'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(err => console.log(err));

