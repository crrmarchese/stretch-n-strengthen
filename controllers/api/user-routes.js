const router = require('express').Router();
const ensureAuth = require('../../utils/auth');
const { User, Routine} = require('../../models');

router.get('/', ensureAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{model: Routine}],
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err) ;
    res.status(500).json(err);
  }
});

router.get('/:id', ensureAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{model: Routine}],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
