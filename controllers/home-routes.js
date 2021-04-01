const router = require('express').Router();
const passport = require('passport')
// const { Muscle, Exercise } = require('../models');
const { Muscle, Exercise, Equipment, Exercise_Equipment, User } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage');
});



router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/muscle', async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findAll({
    });
    const muscles = dbMuscleData.map((muscle) =>
      muscle.get({ plain: true })
    );
    res.render('muscles', {
      muscles,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one muscle
router.get('/muscle/:id', async (req, res) => {
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

router.get('/exercise/:id', async (req, res) => {
  try {
    const dbExercise = await Exercise.findByPk(req.params.id, {
      include: [
        {
          model: Muscle,
          attributes: [
            'id',
            'name',
            'image_url_main',
          ],
        },
        {
          model: Equipment,
          attributes: [
            'name',
          ],
        }
      ],
    });
    const exercise = dbExercise.get({ plain: true });
    res.render('exercise', { exercise });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/routines', (req, res) => {
    res.render('routines');
});


// GET ROUTE FOR LOGIN PAGE 

// note this is made with session.loggedIn copy paste
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
});

//  GET ROUTE for signup page

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
  return;
});








module.exports = router;

