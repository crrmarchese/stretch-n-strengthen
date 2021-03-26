const router = require('express').Router();
const { Equipment, Exercise} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const equipmentData = await Equipment.findAll({
      include: [{model: Exercise}],
    });
    res.status(200).json(equipmentData);
  } catch (err) {
    console.log(err) ;
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const equipmentData = await Equipment.findByPk(req.params.id, {
      include: [{model: Exercise}],
    });

    if (!equipmentData) {
      res.status(404).json({ message: 'No equipment found with that id!' });
      return;
    }

    res.status(200).json(equipmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
