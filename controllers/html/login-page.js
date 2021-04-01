const { ensureAuth } = require('../../utils/auth');

const router = require('express').Router();

router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    console.log(req.session)
    res.render('login');
    return;
  } else if (ensureAuth){
    console.log(req)
    res.redirect(`/user/${req.session.userID}`)
    return;
  } 
  
});


// router.get('/login', (req, res) => {
//   if (!req.session.loggedIn) {
//     res.render('login');
//     return;
//   } else {
//     res.redirect(`/user/${req.user.dataValues.id}`);
//     return;
//   }
// });  
module.exports = router;

