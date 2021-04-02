const router = require('express').Router();
const ensureAuth = require('../../utils/auth');
const { User, User_User } = require('../../models');


router.post('/:userid&:leadid', async (req, res) => {
  try {
    console.log(req.body)
    const userUserData = await User_User.create(req.body);
    res.status(200).json(userUserData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:user&:follow', async (req, res) => {
  try {
    const userUserData = await User_User.destroy({
      where: { 
        follow_id: req.params.user,
        lead_id: req.params.follow  
      }
    });
    res.status(200).json(userUserData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
