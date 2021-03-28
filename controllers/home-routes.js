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


// GET ROUTE FOR LOGIN PAGE 

// note this is made with session.loggedIn copy paste
router.get('/login', async (req, res, next) => {
  // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
    res.redirect('/exercise')
    // .next()
    return;
  }
  // we will probably need try/catch auth code on every page to check if user is logged in.
  // Otherwise, render the 'login' template
    res.render('login');
    return;
  });  

  // POST ROUTE FOR SIGNUP 
  // was '/signup' need a sign in HTML page for this post to work 
router.post('/signup', async (req, res, next) => {
  try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password
      });

      req.session.save(() => {
        req.session.logged_in = true;

        res.status(200).json(newUser)
      })
      // req.session.save(() => {
      //     req.session.id = newUser.id;
      //     req.session.logged_in = true;

      //     res.status(200).json(newUser).next()
      // })
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
});

// POST ROUTE FOR LOGIN 
router.post('/login', async (req, res) => {
try {
  const newUser = await User.findOne({ where: { email: req.body.email } });

  if (!newUser) {
    return res.status(400).json({ message: 'Incorrect email or password, please try again' });
  }

  const validPassword = await newUser.checkPassword(req.body.password);

  if (!validPassword) {
   return res.status(400).json({ message: 'Incorrect email or password, please try again' });
   
  }
    else {
      res.json({ user: newUser, message: 'Now logged in!'});
      // return res.redirect('/api/exercise')
    }
  // req.session.save(() => {
  //   req.session.user_id = newUser.id;
  //   req.session.logged_in = true;
    
  //   res.json({ user: newUser, message: 'You are now logged in!' });
  //  res.redirect('/api/exercise')
  //   return;
  // });

} catch (err){
   return res.json(console.log(err))
}
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

