// const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const { route } = require('./hammond');
const router = express.Router();
const User = require('../models/user');
const path = require('path');

// post req to 'create' a new user, and add them to DB 
// should be /api/auths??
router.post('/', async (req,res) => {
    try {
        const newUser = await User.create(req.body);

        req.session.save(() => {
            req.session.user_name = newUser.user_name, 
            req.session.logged_in = true;

            res.status(200).json(newUser)
        })
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
})

module.exports = router;
// get /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//     res.redirect('homepage ')
// })