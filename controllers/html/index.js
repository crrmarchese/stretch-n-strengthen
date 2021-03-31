const router = require('express').Router();
const exerciseRoutes = require('./exercise-page');
const muscleRoutes = require('./muscle-page');
const homeRoutes = require('./home-page');
const aboutRoutes = require('./about-page');
const loginRoutes = require('./login-page');
const signupRoutes = require('./signup-page');
const userRoutes = require('./user-page');


router.use('/exercise', exerciseRoutes);
router.use('/muscle', muscleRoutes);
router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/about', aboutRoutes);
router.use('/user', userRoutes);

module.exports = router;
