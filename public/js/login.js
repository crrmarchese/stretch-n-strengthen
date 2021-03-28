$( document ).ready(function() {
  console.log( "ready!" );

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
  // ===================
  // LOGINNNNNNN 
  // ===================
    const url = "http://localhost:3001/login"

    $('#loginbtn').on('click', function () {
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
  
    // if (email && password) {
    //   const response = await fetch('/api/exercise', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/api/exercise');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
  };
  
  // ===================
  // SIGN UPPPPPPPPPPP 
  // ===================
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    //    if ( email && password) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/api/exercise');
    //   } else {
    //     alert('Failed to sign up.');
    //   }
    // }
    const url = "http://localhost:3001/login"
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

  
    // if ( email && password) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/api/exercise');
    //   } else {
    //     alert('Failed to sign up.');
    //   }
    // }
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  

  });