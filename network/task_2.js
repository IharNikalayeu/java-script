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
    if (obj.hasOwnProperty(company.name)) obj[company.name].push(username);
    else {
      obj[company.name] = [username];
    }
  });

  for (const [key, value] of Object.entries(obj)) {
    console.log(key + ":");
    value.map((username) => console.log(username));
  }
}

getGroupUser();
