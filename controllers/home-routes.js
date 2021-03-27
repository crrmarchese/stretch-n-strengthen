const router = require('express').Router();
// const { Muscle, Exercise } = require('../models');
// const withAuth = require('../utils/auth');

// This gets the home route and renders the homepage template
router.get('/', (req, res) => {
  // renders homepage that has a call to action, buttons to link
  res.render('homepage');

  // we will probably need try/catch auth code on every page to check if user is logged in.
});




// User clicks 'About' nav-item, gets the about route and renders the about template
router.get('/about', (req, res) => {
  // sample page, equivalent to /muscles -> /muscles/:id -> /exercises -> /exercise/:id
  res.render('about');

   // we will probably need try/catch auth code on every page to check if user is logged in.
});




// User clicks 'Exercise' nav-item, gets page that lists body parts to choose exercises from
// renders the muscles template, queries all Muscle models, strips away Sequelize objects
// loops each muscle into a card on the muscles page
// 
router.get('/muscles', async (req, res) => {
  // try {
  //   const dbMuscleData = await Muscle.findAll({
  //     include: [
  //       {
  //         // model: Exercise,
  //         // attributes: ['name', 'category'],
  //       },
  //     ],
  //   });

  //   const muscles = dbMuscleData.map((muscle) =>
  //   muscle.get({ plain: true })
  //   );

    res.render('muscles', {
      // muscles,
    });
    // we will probably need try/catch auth code on every page to check if user is logged in.

        // Send over the 'loggedIn' session variable to the 'homepage' template
        // res.render('muscles', {
        //   muscles,
        //   loggedIn: req.session.loggedIn,
        // });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

// GET one muscle
router.get('/muscles/:id', async (req, res) => {

  try {
    // const dbMuscleData = await Muscle.findByPk(req.params.id, {
    //   include: [
    //     {
    //       // model: Exercise,
    //       attributes: [
    //         // 'id',
    //         // 'category',
    //         // 'name',
    //         // 'description',
    //       ],
    //     },
    //   ],
    // });

    // This isn't right, because it will be looping over each of the exercises
    // const muscle = dbMuscleData.get({ plain: true });
    res.render('muscle-specific', { muscle });

    // we will probably need try/catch auth code on every page to check if user is logged in.

    // Send over the 'loggedIn' session variable to the 'gallery' template
    // res.render('muscle-specific', { muscle, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// GET one exercise for that muscle
router.get('/exercise/:id', async (req, res) => {
  try {
    // const dbExerciseData = await Exercise.findByPk(req.params.id);

    // const exercise = dbExerciseData.get({ plain: true });

    res.render('exercise', { exercise });

    // we will probably need try/catch auth code on every page to check if user is logged in.

    // Send over the 'loggedIn' session variable to the 'homepage' template
    // res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/routines', (req, res) => {
    // if (!req.session.loggedIn) { res.redirect('/login');  } else {

  // we will probably need try/catch auth code on every page to check if user is logged in.    
  res.render('routines');
// end of elose statement }
});


// Login route
// note this is made with session.loggedIn copy paste
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
    // res.redirect('/');
    // return;
  // }  

  // we will probably need try/catch auth code on every page to check if user is logged in.
  // Otherwise, render the 'login' template
  res.render('login');
});  

module.exports = router;
