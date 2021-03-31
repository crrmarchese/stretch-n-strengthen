const router = require('express').Router();
const { User, Routine, Routine_Exercise, Exercise } = require('../../models');

router.get('/:routine', async (req, res) => {
  try {
    const dbRoutineData = await Routine.findByPk(req.params.routine, {
      include: [
        {
          model: Exercise,
          required: false
        }
      ],
      required: false,
    });

    const routine = dbRoutineData.get({ plain: true });
    console.log(routine)
    res.render('routine', { routine });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

