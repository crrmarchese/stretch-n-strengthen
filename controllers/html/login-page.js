const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('login');
  return;
});

module.exports = router;

