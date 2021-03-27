# stretch-n-strengthen

``` md
dotEnv
Express-Handlebars
MySql2
Passport
Sequelize
auth0
bcrypt
express
fast-average-color
```

<!-- https://sequelize.org/master/manual/model-querying-basics.html -->
<!-- https://sequelize.org/master/class/lib/model.js~Model.html -->


Work flow:

<!-- Render Home Page: GET -->
1. server.js calls /controllers folder to action
2. /controllers index.js calls home-route.js to action
3. /controllers home-route.js GETS '/' domain root and renders homepage.handlebars

<!-- User Interface: GET -->
4. views > layouts > main.handlebars contains the html/head/body tags
5. This nav-bar is always present: HOME | ABOUT | EXERCISES | LOGIN
6. Other than a navigation, home page should just be a photo/call to action/introduction.

<!-- Home|About|Login Nav-Item Flow: GET  -->
<!-- Possibly a "My Routines" item as well, or possibly only for logged in users... -->
7. Home returns to Home. That's it.
8. About displays a sample equivalent to /muscles/:id > /exercises/:id
9. Login is a simple contact form tied to Toni's logic, with a link to Signup.

<!-- Exercise (Muscles) Nav-Item Flow: GET -->
10. A user clicks this nav-bar item, and is brought to a list of body parts/muscles.
11. This corresponds with a muscles-list.handlebars partial, comprised of a single card.
12. This card template is looped over in muscles.handlebars.
13. Recap: User sees nav-item "Exercises" which will have an href of /muscles.
14. Recap: Each muscle card will have its own id. clicking on one serves muscles/:id.

<!-- Exercises (/muscle/:id) Flow: GET/POST -->
15. Once on a specific muscle page, exercises must be looped over and presented responsively.
16. This corresponds with an exercises-list.handlebars partial, comprise of a single card.
17. This card template is looped over in exercises.handlebars.
18. Recap: User sees exercise cards which will have an href of /exercise/:id.
19. Recap: Clicking on one serves a specific exercise table data; see: 8. above (About page)
20. NOTE: on each exercise/:id page, logic is required for a "Add to routine" button/modal.
21. Adding a routine equates to posting specific exercises to a routine table, crudely speaking.

<!-- Routines (???) Flow: GET/POST/DELETE (((subject to change))) -->
22. This should also be a Nav-Item for logged in users.
23. If we keep this on every nav-bar, then logic should go in the public > js folder.
24. This logic would include "if not logged in, re-direct to login page" (no login=no routines).
25. I want to be able to add an exercise to a routine through a modal on the exercise page.
26. I want the modal to contain a "new routine" modal that allows us to name a new routine.
27. I want this routine to show up on a list, so users can select an existing routine or new one.
28. I want to see a confirmation that my exercise routine has been added successfully.
29. I want to see a link that says something along the lines of "Visit Routines"
30. On the Routines Nav-bar item, I want to link to a nice box, a list of my routines.
31. I want to click on a routine, and have each exercise show within it, unwind like an accordion.
32. OR I want to click on a routine, and have its exercises display on the page somehow.
33. I THINK I want each routine to have its own route, to update (add or remove) exercises.
34. FUTURE DEVELOPMENT: drag exercises from one routine to another
35. I want a list of exercises per routine to link individually to their own /exercise/:id page.

<!-- Login Flow: GET/POST (((subject co change))) -->
36. I am not sure how Toni's auth0 google works yet, but here is an approximated draft.
37. I want to see a Nav-item called "Login" for me to login.
38. This login form will have its own public > js > login.js folder logic
39. This login form will lie on a login.handlebars page
40. When login submitted, a post route from the login.js will be sent to /api/users/login.
41. This route goes through api > index.js to dashboard-routes.js to serve by user_id.
42. Once logged in, the specific user data (routines = sets of exercises) should be available.
43. ELSE if the user signs up, login.handlebars will have a /signup href presenting similar data.
44. The /signup form will have its own public > js > signup.js folder logic
45. The signup process also has its own signup.handlebars page
46. The login process posts to controllers > index.js > api > index.js > user-routes.js
47. 
48. 
49. 
50. 