const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };


  module.exports = withAuth;

  // module.exports = {
  //   ensureAuth: function (req, res, next) {
  //     if (req.isAuthenticated()) {
  //       return next()
  //     } else {
  //       res.redirect('/')
  //     }
  //   },
  //   ensureGuest: function (req, res, next) {
  //     if (!req.isAuthenticated()) {
  //       return next();
  //     } else {
  //       res.redirect('/dashboard');
  //     }
  //   },
  // }