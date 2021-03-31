
// const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const router = express.Router();
const { User } = require('../../models/User')
const withAuth = require('../../utils/auth')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

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

// something fishy here
router.get('login', async( req, res ) => {
  if(req.session.loggedIn){
    res.redirect('/routines')
    return;
  }
})

// get request for signup page
router.get('/signup', async (req, res, next) => {
  res.render('signup')
})

// POST ROUTE FOR SIGNUP 
// something going wrong on the front end, page keeps refreshing 
router.post('/signup', async (req, res, next) => {
  try {
    console.log('amiworking')
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.json({ user: newUser, message: 'Signed up!'})
    req.session.save(() => {
      req.session.loggedIn = true;
      return res.render('/routines')
      // res.status(200).json(newUser)
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
});

// POST ROUTE FOR LOGIN 
// this works swimmingly
router.post('/login', async (req, res) => {
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
      res.json({ user: newUser, message: 'Now logged in!' });
      req.session.save(() => {
        req.session.userID = newUser.id;
        req.session.loggedIn = true;
        return res.render('/routines')
      });
    }

  } catch (err) {
    return res.json(console.log(err))
  }
});

// this one should work, will need to test it
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
