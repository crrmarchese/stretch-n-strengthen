const router = require('express').Router();
const { Routine, Exercise, Routine_Exercise } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const routineData = await Routine.findAll({
      // include: [{model: Routine}],
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
      include: [{model: Exercise}],
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

router.post('/', async (req, res) => {
  try{
    const routineData = await Routine.create(req.body);
    res.status(200).json(routineData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/:routine&:exercise', async (req, res) => {
  try {
    const routineExerciseData = await Routine_Exercise.create(req.body);
    res.status(200).json(routineExerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:routine&:exercise', async (req, res) => {
  try {
    const routineExerciseData = await Routine_Exercise.destroy({
      where: { 
        routine_id: req.params.routine,
        exercise_id: req.params.exercise  
      }
    });
    res.status(200).json(routineExerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:routine', async (req, res) => {
  try {
    const routineData = await Routine.destroy({
      where: { 
        id: req.params.routine,
      }
    });
    res.status(200).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;