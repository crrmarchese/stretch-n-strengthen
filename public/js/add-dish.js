// why does this code do what it does?
// this code takes the form input values
// and creates a fetch instance for the POST request
// it takes the user input and JSON.stringifies it
// if it works right it will just refresh the page basically
async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
  // Send fetch request to add a new dish
  // corresponds to api folder, index.js, which uses /dish, so /api/dish, and pushes through dishroutes.js
  const response = await fetch(`/api/dish`, {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }
}

document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);


/*
NOTE:
- This function would come in handy for our add exercise to routine route
- I still have to understand what that looks like exactly... maybe two separate pages?
     - example: routines.handlebars
     - ex. 2  : add-routines.handles
- I'm sure it's possible through modal, but that's rocket science to me as of now
- Click button -> add to routine -> which routine? -> condition logic -> .js? sequelize?
- TBD -- ultimately, this code is basically useless, but the fundamental "post /exercise/routine/1" makes sense now, the fetch(..) will correspond with the controllers files


*/
  