
// const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const router = express.Router();
const withAuth = require('../../utils/auth')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile']  }))

// /auth/google/callback
router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/', successRedirect: '/routines' }),
  (req, res) => {
    console.log('heck')
    res.redirect('/routines')
}) 

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
router.get('/login', async (req, res, next) => {
  // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
    res.redirect('/exercise')
    // .next()
    return;
  }
  // we will probably need try/catch auth code on every page to check if user is logged in.
  // Otherwise, render the 'login' template
    res.render('login');
    return;
  });  

// get reqeust for signup page
  router.get('/signup', async(req, res, next) => {
    res.render('signup')
  })

  // POST ROUTE FOR SIGNUP 
  // was '/signup' need a sign in HTML page for this post to work 
router.post('/signup', async (req, res, next) => {
  try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password
      });

      req.session.save(() => {
        req.session.logged_in = true;

        res.status(200).json(newUser)
      })
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
});

// POST ROUTE FOR LOGIN 


router.post('/login', withAuth, 
// passport.authenticate('local', {successRedirect: '/routines', failureRedirect: '/login'}), 
async (req, res) => {
try {
  const newUser = await User.findOne({ where: { email: req.body.email } });

  if (!newUser) {
    return res.status(401).json({ message: 'Incorrect email or password, please try again' });
  }

  const validPassword = await newUser.checkPassword(req.body.password);

  if (!validPassword) {
   return res.status(401).json({ message: 'Incorrect email or password, please try again' });
   
  }
    else {
      res.json({ user: newUser, message: 'Now logged in!'});
      // return res.redirect('/api/exercise')
    }
  // req.session.save(() => {
  //   req.session.user_id = newUser.id;
  //   req.session.logged_in = true;
    
  //   res.json({ user: newUser, message: 'You are now logged in!' });
  //  res.redirect('/api/exercise')
  //   return;
  // });

} catch (err){
   return res.json(console.log(err))
}
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
