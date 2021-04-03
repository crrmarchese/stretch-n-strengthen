const router = require('express').Router();
const { User, User_User, Routine} = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User_User,
          as: 'follow',
          include: [{ model: User }],
          required: false 
        },
        {
          model: User_User,
          as: 'lead',
          include: [{ model: User }],
          required: false,
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
    })

    const user = dbUserData.get({plain: true});
    console.log(user)

    const followMap = user.follow.map((ele) => ele.user)
    const leadMap = user.lead.map((ele) => ele.user)

    console.log(leadMap)
    res.render('user', { user, followMap, leadMap });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
