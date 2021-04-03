const router = require('express').Router();
const { User, User_User, Routine} = require('../../models');

router.get('/:id', async (req, res) => {
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
    })

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

    const dbLeadData = await User_User.findAll({
      raw: true,
      nest: true,
      where: {
        lead_id: req.params.id
      },
      include: [
        {
          model: User,
          as: 'follow',
          required: false,
          attributes: {
            exclude: ['password'],
          } 
        }
      ],
    })


    const user = dbUserData.get({plain: true})
    const leadMap = dbLeadData
    const followMap = dbFollowData
    console.log(followMap)
    console.log(leadMap)
    res.render('user', { user, followMap, leadMap });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
