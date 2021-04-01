const router = require('express').Router();

//  SignUp
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
  return;
});

module.exports = router;

