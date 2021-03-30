const passport = require('passport')
const Sequelize = require('sequelize');
const sequelize = require('./connection')
// const User = require('../models').User
// const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Google = require('../models/Google')
require('dotenv').config()

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        passReqToCallback: true,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/google/callback'

      },
      async (req, accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const newGoogle = {
          googleID: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value
        }

        try {
          let google = await Google.findByPk( profile.id )
          console.log(google)
          if (google) {
            return done(null, google)
          } else {
            google = await Google.create(newGoogle)
            return done(null, google)
          }
        } catch (err) {
          console.error(err)
        }
      }))

  passport.serializeUser((user, done) => {
    return done(null, user.googleID)
  })
  // passport.serializeUser(function (user, done) {
  //   return done(null, user.id);
  // });

  passport.deserializeUser((id, done) => {
   return Google.findByPk(id).then(user => done(null, user)).catch((err) => done(err, null))
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
