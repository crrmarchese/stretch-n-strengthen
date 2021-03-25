const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const passport = require('passport')
const session = require('express-session')
require('dotenv').config()
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// const helpers = require('./utils/helpers');
const routes = require('./routes')
// const controllers = require('./controllers')

// // PASSPORT CONFIG
require('./config/passport')(passport)


// // const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

// // Handlebars stuff, can be found in class assignments
// =========================
// so when I change it to app.use(controllers), get request shows 200OK status, but I get the 'wrong route' message when I try to get request
//  same with post request
// will be back around 630 to delve into this and get it fixed fixed 
// =========================
app.use(routes);
// app.use(controllers)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// SESSIONS, must be above passport middleware
const sess = {
  secret: 'Secret secret',
  cookie: {}, 
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess))

//PASSPORT
app.use(session({
  secret: 'secret secret',
  resave: false,
  saveUninitialized: false, // don't create a session until something is stored 
  // store value here (how to use with mysql?)
}))

// PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/hammond'));
app.use(require('./controllers/'));
app.use('/auth', require('./controllers/auths'));



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(err => console.log(err));

