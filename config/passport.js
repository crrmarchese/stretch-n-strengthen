const passport = require('passport')
const Sequelize = require('sequelize');
const sequelize = require('./connection')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/User');
require('dotenv').config()

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        passReqToCallback: true,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        passReqToCallback   : true
      },
      async (req, accessToken, refreshToken, profile, done) => {
        const newGoogle = {
          id: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value
        }

        try {
          let google = await User.findByPk( profile.id )
          if (google) {
            return done(null, google)
          } else {
            google = await User.create(newGoogle)
            return done(null, google)
          }
        } catch (err) {
          console.error(err)
        }
      }))

      // passport.use(new LocalStrategy({
      //   usernameField: 'email',
      //   passwordField: 'password',
      //   session: false
      // },
      // function(email, password, done) {
      //   User.findOne({ where: { 'email': email} }, function (err, user){
      //     if (err) {return done(err)}
      //     if (!User){
      //       return done(null, false, { message: 'incorrect username or password'});
      //     }
      //     if (!User.validPassword(password)) {
      //       return done(null, false, { message: 'incorrect username or password'});
      //     }
      //     return done(null, User)
      //   })
      // }
      // ));


  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
   return User.findByPk(id).then(user => done(null, user)).catch((err) => done(err, null))
  });
}

// module.exports = function(passport) {
// }