const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');
const authRoutes = require('./auths');
const withAuth = require('../utils/auth');

// might have to refactor this.. currently set to /api routes require login. 
// router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/api', withAuth, apiRoutes);

module.exports = router;