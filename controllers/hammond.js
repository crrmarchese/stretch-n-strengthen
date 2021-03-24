const router = require('express').Router();

// This is the 'get' route that will eventually have async/await.

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/routines', (req, res) => {
  res.render('routines');
});

/*
// This will be for one exercise or body part or routine etc.
router.get('/dish/:num', async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render('dish', dishes[req.params.num - 1]);
});

*/
// Assignment code for dish id.
// ctrl + . will allow for multiple lint fixes at once.
/*
These are dynamic routes that search by the id.
The dish.handlebars page is rendered to display a card containing whatever information is queried by the id.
This is technically a query, because the user will GET by id, but the information will come from the DATABASE, thus we will be selecting where id = num to select a specific workout.
NOTE: id probably won't be the way to go, because:
     - dynamically, users will click on a bodypart, then exercises.
     - so, routes in the domain will probably look something like bodypart/exercise.
Regardless, the dish.handlebars card (partials? not sure yet) is always the same.
What the takeaway is: regardless the body part OR exercise, the handlebars structure should always be the same.
*/
const dishes = [
  {
    id: 1,
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
    has_nuts: false,
  },
  {
    id: 2,
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
        'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
    has_nuts: true,
  },
];

router.get('/dish/:num', (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render('dish', dishes[req.params.num - 1]);
});

module.exports = router;
