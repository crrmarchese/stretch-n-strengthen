const { ensureGuest } = require('../../utils/auth');
const router = require('express').Router();

//  SignUp
// router.get('/signup', (req, res) => {
//   if (!req.session.loggedIn) {
//     res.render('signup');
//     return;
//   } else if (ensureAuth) {
//     res.redirect(`/user/${req.user.dataValues.id}`)
//     return;
//   }
// });

router.get('/signup', (req, res) => {
  if (!req.session.loggedIn) {
    console.log(req.session)
    res.render('signup');
    return;
  } else {
    console.log(req)
    res.redirect(`/user/${req.session.userID}`)
    return;
  } 


})
// if (req.session.loggedIn) {
//   res.redirect('/');
//   return;
// }
// res.render('signup');
// return;

module.exports = router;

