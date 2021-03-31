const router = require('express').Router();
const { Category, Exercise, Equipment} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      include: [{model: Category}, {model: Equipment}],
    });
    res.status(200).json(exerciseData);
  } catch (err) {
    console.log(err) ;
    res.status(500).json(err);
  }
});

module.exports = router;
