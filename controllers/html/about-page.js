const router = require('express').Router();

// About
router.get('/', (req, res) => {
  res.render('about');
});

module.exports = router;

