const router = require('express').Router();
const exerciseRoutes = require('./exercise-routes');

router.use('/exercise', exerciseRoutes);

module.exports = router;
