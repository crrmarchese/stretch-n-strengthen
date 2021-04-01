const router = require('express').Router();

// Homepage
router.get('/', (req, res) => {
  const data = { user: req.user };
  res.render('homepage', data);
});

module.exports = router;

