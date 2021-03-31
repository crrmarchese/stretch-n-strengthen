const router = require('express').Router();
const { User, Routine, Routine_Exercise, Exercise} = require('../../models');

router.get('/:id/:routine', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Routine,
          required: false 
        }
      ],
      required: false,
      attributes: {
        exclude: ['password'],
      }
    });
    
    const user = dbUserData.get({ plain: true });
    res.render('user', { user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

