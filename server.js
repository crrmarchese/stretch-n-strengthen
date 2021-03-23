// const path = require('path');
// const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
//const sequelize = require('./config/connection');


// Create the Handlebars.js engine object with custom helper functions
//const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');


const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const passport = require('passport')
const session = require('express-session')

// const routes = require('./routes');
const sequelize = require('./config/connection');

require('./config/passport')(passport)
// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars stuff, can be found in class assignments
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// passport middleware
app.use(passport.initialize);

// feeeeeel like session is not the way to go on this?!
// app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/hammond'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
