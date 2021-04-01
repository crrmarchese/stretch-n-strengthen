const express = require('express');
const passport = require('passport');
const router = express.Router();
const { User } = require('../../models/User')

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// /auth/google/callback
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  async (req, res) => {
    res.redirect(`/user/${req.user.dataValues.id}`);
  }
)


// RYAN - Do we need Async here? What about next?
// router.get('/login', async (req, res) => {
//     if (!req.session.loggedIn) {
//       const userID = await User.findOne({ where: { email: req.body.email }, attributes: ['id'] });
//       res.redirect(`/user/${userID}`)
//     return;
//   }
//     res.render('login');
//     return;
//   });  

// RYAN - Do we need Async here? What about next?
router.get('/signup', (req, res) => {
  res.render('signup')
})

// POST ROUTE FOR SIGNUP 
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect(`/user/${newUser.id}`)
      
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
      // res.status(200).json({ user: newUser, message: 'Now logged in!' });
      req.session.save(() => {
        req.session.userID = newUser.id;
        req.session.loggedIn = true;
        return res.redirect(`/user/${newUser.id}`);
      });
    }
  } catch (err) {
    return res.json(console.log(err));
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
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
