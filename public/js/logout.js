const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  }
    
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       console.log(req.user);
//       alert('Failed to log out.');
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);
  