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
    obj[company.name] === undefined
      ? (obj[company.name] = [username])
      : obj[company.name].push(username);
  });

  for (key in obj) {
    console.log(key + ":");
    obj[key].map((username) => console.log(username));
  }
}

getGroupUser();
