const router = require('express').Router();
const { Exercise, Equipment, Muscle } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbExercise = await Exercise.findByPk(req.params.id, {
      include: [
        {
          model: Muscle,
          attributes: [
            'id',
            'name',
            'image_url_main',
          ],
        },
        {
          model: Equipment,
          attributes: [
            'name',
          ],
        }
      ],
    });
    const exercise = dbExercise.get({ plain: true });
    console.log(exercise)
    res.render('exercise', { exercise });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
