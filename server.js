// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// Create the Handlebars.js engine object with custom helper functions
//const hbs = exphbs.create({ helpers });
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
// const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
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
