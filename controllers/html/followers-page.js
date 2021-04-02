const router = require('express').Router();
const { User, User_User } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


router.get('/:id', async (req, res) => {
  try {
    const allUsers = await User.findAll({
      raw: true,
      where: { 
        id: { 
          [Op.ne]: req.params.id 
        }
      },
      required: false,
      attributes: {
        exclude: ['password']
      },
    });

    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User_User,
          as: 'follow',
          // where: { lead_id: req.params.id },
          include: [{ model: User }],
          required: false 
        },
        {
          model: User_User,
          as: 'lead',
          // where: { follow_id: req.params.id },
          include: [{ model: User }],
          required: false,
          separate: true 
        }
      ],
      required: false,
      attributes: {
        exclude: ['password'],
      }
    })
    const user = dbUserData.get({plain: true})

    user.follow.forEach((ele1) => {
      let index = allUsers.findIndex(ele2 => ele2.id === ele1.user.id)
      allUsers.splice(index, 1)
    })

    const followMap = user.follow.map((ele) => ele.user)

    res.render('followers', { user, allUsers, followMap });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

