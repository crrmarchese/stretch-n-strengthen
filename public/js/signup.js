
const signupFormHandler = (event) => {

  //NEED TO CHANGE DOCUMENT.LOCATION.REPLACE WITH /USER INFO HERE
  event.preventDefault();
  console.log("HELELLOOOKJSDLFJASLDKFLK")
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (email && password) {
    const response = fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    });
  }
};
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);