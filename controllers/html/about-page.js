const router = require('express').Router();

// About
router.get('/', (req, res) => {
  const data = { user: req.user };
  res.render('about', data);
});

module.exports = router;

