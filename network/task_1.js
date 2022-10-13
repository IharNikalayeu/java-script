// Получить список пользователей:
// https://jsonplaceholder.typicode.com/users/

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then((data) => {
    data.map(({ name }) => console.log(name));
  });

async function getUserName() {
  let promise = await fetch("https://jsonplaceholder.typicode.com/users/");
  let data = await promise.json();

  data.map(({ name }) => console.log(name));
}

getUserName();
