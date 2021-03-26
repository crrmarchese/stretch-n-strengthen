const router = require('express').Router();
const { Muscle, Exercise } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const muscleData = await Muscle.findAll({
      include: [{model: Exercise}],
    });
    res.status(200).json(muscleData);
  } catch (err) {
    console.log(err) ;
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const muscleData = await Muscle.findByPk(req.params.id, {
      include: [{model: Exercise}],
    });

    if (!muscleData) {
      res.status(404).json({ message: 'No muscle found with that id!' });
      return;
    }

    res.status(200).json(muscleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
