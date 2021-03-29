
// const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Google = require('../../models/Google');
const path = require('path');

router.get('/google', passport.authenticate('google', { scope: ['profile']  }))

// google auth callback

// /auth/google/callback
router.get(
  '/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/routines')
}) 

// post req to 'create' a new user, and add them to DB 
// path is currently localhost:3001/auth/

// router.post('/', async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);

//         req.session.save(() => {
//             req.session.id = newUser.id;
//             req.session.logged_in = true;

//             res.status(200).json(newUser)
//         })
//     } catch (err) {
//         res.status(400).json(err)
//         console.log(err)
//     }
// })

// router.post('/login', async (req, res) => {
//     try {
//       const newUser = await User.findOne({ where: { email: req.body.email } });
  
//       if (!newUser) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
//       const validPassword = await newUser.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.user_id = newUser.id;
//         req.session.logged_in = true;
        
//         res.json({ user: newUser, message: 'You are now logged in!' });
//       });
  
//     } catch (err){
//         res.json(console.log(err))
//     }
//   });

  // router.post('/logout', (req, res) => {
  //   if (req.session.logged_in) {
  //     req.session.destroy(() => {
  //       res.status(204).end();
  //     });
  //   } else {
  //     res.status(404).end();
  //   }
  // });

module.exports = router;
