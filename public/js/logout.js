const logout = async () => {
  const response = await fetch(`/logout`, {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
  });

if (response.ok) {
  document.location.replace('/');
  console.log(response)
} else {
  alert('failed to logout')
}
};

document.querySelector('#logout').addEventListener('click', logout)