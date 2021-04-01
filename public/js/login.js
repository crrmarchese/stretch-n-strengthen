$(document).ready(function () {
  console.log("ready!");


  //NEED TO CHANGE DOCUMENT.LOCATION.REPLACE WITH /USER INFO HERE
  const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();



    const url = "/login"

    $('#loginbtn').on('click', function () {
      $.post(url,
        {
          "email": email,
          "password": password
        },
      ).then((response) => {
        document.location.replace('/')
        console.log("yay")
      })
    });
  };

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
});