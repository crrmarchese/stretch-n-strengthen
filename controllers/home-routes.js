const router = require('express').Router();
const passport = require('passport')
// const { Muscle, Exercise } = require('../models');
const { Muscle, Exercise, Equipment, Exercise_Equipment, User } = require('../models');

// ==========================================================
//  All public routes, available to any user logged in or not 
// ==========================================================


router.get('/', (req, res) => {
  res.render('homepage');
});

// User clicks 'About' nav-item, gets the about route and renders the about template
router.get('/about', (req, res) => {
  res.render('about');
  // we will probably need try/catch auth code on every page to check if user is logged in.
});

router.get('/muscle', async (req, res) => {
  try {
    const dbMuscleData = await Muscle.findAll({
      // include: [
      //   {
      //     model: Exercise,
      //   },
      // ],
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

  // this if / else breaks it 
  // if (!req.session.loggedIn) { res.redirect('/login'); }
  // else {
    res.render('routines');
  // }
});


// GET ROUTE FOR LOGIN PAGE 

// note this is made with session.loggedIn copy paste
router.get('/login', async (req, res, next) => {
  res.render('login');
  return;
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

