const router = require('express').Router();
const { Muscle, Exercise } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findAll({});
    const muscles = dbMuscleData.map((muscle) =>
      muscle.get({ plain: true })
    );
    res.render('muscles', { muscles });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findByPk(req.params.id, {
      include: [
        {
          model: Exercise,
          attributes: [
            'id',
            'category_id',
            'name',
            'description',
          ],
        },
      ],
    });
    const muscle = dbMuscleData.get({ plain: true });
    console.log('\n');
    console.log('\n');
    res.render('muscle-specific', { muscle });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
