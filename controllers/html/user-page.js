const router = require('express').Router();
const { ensureAuth } = require('../../utils/auth')
const { User, Routine, User_User} = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    console.log(req.user);
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User_User,
          as: 'follow',
          where: { lead_id: req.params.id },
          include: [{ model: User }],
          required: false 
        },
        {
          model: User_User,
          as: 'lead',
          where: { follow_id: req.params.id },
          include: [{ model: User }],
          required: false,
          separate: true 
        },
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
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

