const router = require('express').Router();
const passport = require('passport')
// const { Muscle, Exercise } = require('../models');
const { Muscle, Exercise, Equipment, Exercise_Equipment, User } = require('../models');


// This gets the home route and renders the homepage template
router.get('/', (req, res) => {
  res.render('homepage');
});


// User clicks 'About' nav-item, gets the about route and renders the about template
router.get('/about', (req, res) => {
  // sample page, equivalent to /muscles -> /muscles/:id -> /exercises -> /exercise/:id
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
    // console.log(muscles[0]);
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
    // console.log(muscle);
    // console.log(muscle[0]);
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
    // console.log('test');
    // console.log(exercise.equipment);
    // console.log(exercise.equipment[0].name);
    // console.log(exercise.equipment.name);
    // console.log(exercise.muscles[0].image_url_main);
    // console.log(exercise.description);
    res.render('exercise', { exercise });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/routines', (req, res) => {

  // this breaks it 
  // if (!req.session.loggedIn) { res.redirect('/login'); }
  // else {

    // we will probably need try/catch auth code on every page to check if user is logged in.    
    res.render('routines');
  // }
});


// GET ROUTE FOR LOGIN PAGE 

// note this is made with session.loggedIn copy paste
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('login');
  // return;
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

