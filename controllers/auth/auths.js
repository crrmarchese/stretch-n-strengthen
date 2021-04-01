const express = require('express');
const passport = require('passport');
const router = express.Router();
const { User }  = require('../../models/User')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}))

// /auth/google/callback
router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/'}),
  async (req, res) => {
    console.log(req.user)
    res.redirect(`/user/${req.user.dataValues.id}`);
}
) 

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

// RYAN - Do we need Async here? What about next?
router.get('/login', async (req, res, next) => {
    if (req.session.loggedIn) {
      const userID = await User.findOne({ where: { email: req.body.email }, attributes: ['id'] });
      res.redirect(`/user/${userID}`)
    return;
  }
    res.render('login');
    return;
  });  

// RYAN - Do we need Async here? What about next?
router.get('/signup', async(req, res, next) => {
  res.render('signup')
})

// POST ROUTE FOR SIGNUP 
router.post('/signup', async (req, res, next) => {
try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUser)
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
});

// POST ROUTE FOR LOGIN 
router.post('/login', async (req, res) => {
  try {
    const newUser = await User.findOne({ where: { email: req.body.email } });

    if (!newUser) {
      return res.status(401).json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = await newUser.checkPassword(req.body.password);

    if (!validPassword) {
    return res.status(401).json({ message: 'Incorrect email or password, please try again' });
    } else {
        res.json({ user: newUser, message: 'Now logged in!'});
        req.session.save(() => {
          req.session.userID = newUser.id;
          req.session.loggedIn = true;
          return res.render('/exercise');
        });
      }
  } catch (err){
    return res.json(console.log(err));
  }
});

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
