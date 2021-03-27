const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

// const apiRoutes = require('./apii');
const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');
const authRoutes = require('./auths');
// const withAuth = require('../utils/auth');

<<<<<<< HEAD
// might have to refactor this.. currently set to /api routes require login. 

=======
// might have to refactor this.. currently set to /api routes require login.
router.use('/', homeRoutes);
>>>>>>> 221324833920d0d7b1bc27bbb22f33e355692c58
router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;


