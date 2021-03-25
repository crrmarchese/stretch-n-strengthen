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

router.get('/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.findByPk(req.params.id, {
      include: [{model: Category}, {model: Equipment}],
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No exercise found with that id!' });
      return;
    }

    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;