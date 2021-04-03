const router = require('express').Router();
const exerciseRoutes = require('./exercise-routes');
const muscleRoutes = require('./muscle-routes');
const equipmentRoutes = require('./equipment-routes');
const userRoutes = require('./equipment-routes');
const routineRoutes = require('./routine-routes');
const followersRoutes = require('./followers-routes');


router.use('/exercise', exerciseRoutes);
router.use('/muscle', muscleRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/user', userRoutes);
router.use('/routine', routineRoutes);
router.use('/followers', followersRoutes);

module.exports = router;