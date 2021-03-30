const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
// const apiRoutes = require('./apii');
const apiRoutes = require('./api');
const authRoutes = require('./api/auths');
const withAuth = require('../utils/auth');


// might have to refactor this.. currently set to /api routes require login.
router.use('/', authRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/auth', authRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
