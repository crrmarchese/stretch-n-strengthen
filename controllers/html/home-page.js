const router = require('express').Router();

// Homepage
router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;

