// Вывести сгруппированных пользователей по названиям компаний:
// // Considine-Lockman:
// // Igor Arsenal - username
// // ...
// // Delphine:
// // Igor Red - username

async function getGroupUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await response.json();

  obj = {};

  users.map(({ username, company }) => {
    obj[company.name]
      ? obj[company.name].push(username)
      : (obj[company.name] = [username]);
  });

  Object.entries(obj).forEach(([name, usernames]) => {
    console.log(name);
    usernames.forEach((username) => console.log(username));
  });
}

getGroupUser();
