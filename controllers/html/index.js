const router = require('express').Router();
const exercisePage = require('./exercise-page');
const musclePage = require('./muscle-page');
const homePage = require('./home-page');
const aboutPage = require('./about-page');
const loginPage = require('./login-page');
const signupPage = require('./signup-page');
const userPage = require('./user-page');


router.use('/exercise', exercisePage);
router.use('/muscle', musclePage);
router.use('/', homePage);
router.use('/login', loginPage);
router.use('/signup', signupPage);
router.use('/about', aboutPage);
router.use('/user', userPage);

module.exports = router;
