const passport = require('passport')
const Sequelize = require('sequelize');
const sequelize = require('./connection')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../models/User');
require('dotenv').config()

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        passReqToCallback: true,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/google/callback',
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

  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
   return User.findByPk(id).then(user => done(null, user)).catch((err) => done(err, null))
  });
}