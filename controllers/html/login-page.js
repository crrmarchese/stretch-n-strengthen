const router = require('express').Router();

router.get('/login', async (req, res, next) => {
  res.render('login');
  return;
});

module.exports = router;

