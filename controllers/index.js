const router = require('express').Router();
const htmlRoutes = require('./html');
const apiRoutes = require('./api');
const authRoutes = require('./auth/auths');

router.use('/', authRoutes);
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);



router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;


