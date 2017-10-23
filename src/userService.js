export const getUsers = () => {
  return fetch("https://fr.mail.yahoo.com/users")
    .then((response) => {
      return response.json();
    });
};