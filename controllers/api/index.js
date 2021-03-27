const router = require('express').Router();
const exerciseRoutes = require('./exercise-routes');
const muscleRoutes = require('./muscle-routes');
const equipmentRoutes = require('./equipment-routes');
const userRoutes = require('./equipment-routes');
const withAuth = require('../../utils/auth')

router.use('/exercise', exerciseRoutes);
router.use('/muscle', muscleRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/user', withAuth, userRoutes);

module.exports = router;
