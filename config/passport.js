const passport = require('passport')
const Sequelize = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;
// const Google = require('../models/Google')
const User = require('../models/User')
require('dotenv').config()

module.exports = function (passport) {
  passport.use(new LocalStrategy(
    function (email, password, done){
      User.findOne({ email: email}, function (err, user){
        if (err) {return done(err)}
        if (!User){
          return done(null, false, { message: 'incorrect username or password'});
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'incorrect username or password'});
        }
        return done(null, User)
      })
    }
  ))
    // passport.use(new LocalStrategy({
    //     clientID: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     callbackURL: 'auth/google/callback'
    }
    
//     async(accessToken, refreshToken, profile, done) => {
//         console.log(profile)
//     }))

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//       });
      
//       passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//           done(err, user);
//         });
//       }); 
// }