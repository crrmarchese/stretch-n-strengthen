const router = require('express').Router();
const { Routine, Exercise, Routine_Exercise } = require('../../models');

router.get('/', async (req, res) => {
  try {
    console.log('blaablabla')
    const routineData = await Routine.findAll({
      include: [{model: Routine}],
    });
    res.status(200).json(routineData);
  } catch (err) {
    console.log(err) ;
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const routineData = await Routine_Exercise.findByPk(req.params.id, {
      include: [{model: Routine_Exercise}],
    });

    if (!routineData) {
      res.status(404).json({ message: 'No routine found with that id!' });
      return;
    }

    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;