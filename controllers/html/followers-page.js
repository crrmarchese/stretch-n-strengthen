const router = require('express').Router();
const { User, User_User } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


router.get('/:id', async (req, res) => {
  try {

    const user = await User.findByPk(req.params.id, {
      raw: true,
      nest: true,
      attributes: {
        exclude: ['password'],
      }
    })

    const allUsers = await User.findAll({
      raw: true,
      nest: true,
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

    const dbFollowData = await User_User.findAll({
      raw: true,
      nest: true,
      where: {
        follow_id: req.params.id
      },
      include: [
        {
          model: User,
          as: 'lead',
          required: false,
          attributes: {
            exclude: ['password'],
          } 
        }
      ],
      required: false,
    })

    const followMap = dbFollowData
    console.log(followMap)

    res.render('followers', { user, allUsers, followMap });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

