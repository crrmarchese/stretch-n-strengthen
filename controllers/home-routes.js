const router = require('express').Router();
const { Muscle, Exercise, User } = require('../models');
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
    console.log(muscles[0]);
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
    console.log(muscle);
    console.log(muscle[0]);
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
        ],
      });
    const exercise = dbExercise.get({ plain: true });
    console.log(exercise.muscles[0].image_url_main);
    // console.log(exercise.description);
    res.render('exercise', { exercise });
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
  if (req.session.loggedIn) {
    res.render('/exercise');
    return;
  }  

  // we will probably need try/catch auth code on every page to check if user is logged in.
  // Otherwise, render the 'login' template
  res.render('login');
});  

router.post('/', async (req, res) => {
  try {
      const newUser = await User.create(req.body);

      req.session.save(() => {
          req.session.id = newUser.id;
          req.session.logged_in = true;

          res.status(200)
          // .json(newUser)
      })
  } catch (err) {
      res.status(400).json(err)
      console.log(err)
  }
});

router.post('/login', async (req, res) => {
try {
  const newUser = await User.findOne({ where: { email: req.body.email } });

  if (!newUser) {
    res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }

  const validPassword = await newUser.checkPassword(req.body.password);

  if (!validPassword) {
    res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }

  req.session.save(() => {
    req.session.user_id = newUser.id;
    req.session.logged_in = true;
    
    res.json({ user: newUser, message: 'You are now logged in!' });
    res.redirect('/api/exercise')
  });

} catch (err){
    res.json(console.log(err))
}
});


module.exports = router;

