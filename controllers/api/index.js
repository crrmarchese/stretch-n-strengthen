const router = require('express').Router();
const exerciseRoutes = require('./exercise-routes');
const muscleRoutes = require('./muscle-routes');
const equipmentRoutes = require('./equipment-routes');
const userRoutes = require('./equipment-routes');

router.use('/exercise', exerciseRoutes);
router.use('/muscle', muscleRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/user', userRoutes);

module.exports = router;
