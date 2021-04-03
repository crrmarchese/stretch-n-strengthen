const logout = async () => {
  const response = await fetch(`/logout`, {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
  });
}