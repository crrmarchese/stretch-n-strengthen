$( document ).ready(function() {
  console.log( "ready!" );

// WILL NEED TO CHANGE THE 'URL' VARS HERE TO THE ACTUAL HEROKU APP

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    const url = "http://localhost:3001/login"

    $('#loginbtn').on('click', function () {
     $.post(url, 
     {
       "email": email,
       "password": password
     }, 
    ).then((response) => {
      document.location.replace('http://localhost:3001/routines')
      console.log("yay")
    })
  });

  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const url = "http://localhost:3001/signup"

    $('#signupbtn').on('click', function () {
     $.post(url, 
      {
        "email": email,
        "password": password
      }, 
    ).then((response) => {
      document.location.replace('http://localhost:3001/routines')
      console.log(response)
      console.log("yay")
    })
  });
};

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  

  });