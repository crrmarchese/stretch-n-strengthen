const passport = require('passport')
const Sequelize = require('sequelize');
const sequelize = require('./connection')
// const User = require('../models').User
// const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Google = require('../models/Google')
require('dotenv').config()

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy(
      {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001//auth/google/callback'
 
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    const newGoogle = {
      googleId: profile.id,
      displayName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      image: profile.photos[0].value
    }

    try{
      let google = await Google.findOne({ googleId: profile.id })

      if (google) {
        done(null, google)
      } else {
        google = await Google.create(newGoogle)
        done(null, google)
      }
    } catch(err) {
        console.error(err)
    }
  }))

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id,( err, user) => {
      done(err, user);
    });
  });
}

// module.exports = function(passport) {
//   passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     session: false
//   },
//   function(email, password, done) {
//     User.findOne({ where: { 'email': email} }, function (err, user){
//       if (err) {return done(err)}
//       if (!User){
//         return done(null, false, { message: 'incorrect username or password'});
//       }
//       if (!User.validPassword(password)) {
//         return done(null, false, { message: 'incorrect username or password'});
//       }
//       return done(null, User)
//     })
//   }
// ));
// }
