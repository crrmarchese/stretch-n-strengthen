const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const authRoutes = require('./auths')

router.use('/', homeRoutes);
router.use('/api/auth', authRoutes);
router.use('/api', apiRoutes);

module.exports = router;