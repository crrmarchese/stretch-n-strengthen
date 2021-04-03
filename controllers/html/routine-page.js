const router = require('express').Router();
const { Routine, Exercise } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbRoutineData = await Routine.findByPk(req.params.id, {
      include: [
        {
          model: Exercise,
          required: false
        }
      ],
      required: false,
    });

    const exercise = await Exercise.findAll({raw: true, required: false});
    const routine = dbRoutineData.get({ plain: true });
    routine.exercises.forEach((ele1) => {
      let index = exercise.findIndex(ele2 => ele2.id === ele1.id)
      exercise.splice(index, 1)
    })

    res.render('routine', { routine, exercise });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

