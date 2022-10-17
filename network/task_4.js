// Вывести сотрудников с полным адресом:
// // Name: some name
// // Adress: city, street, suite (geo: lat; lng)

async function showUsersInfo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();

  const showAddress = ({ city, street, suite, geo }) =>
    console.log(
      `Address: ${city}, ${street}, ${suite} (geo: ${geo.lat}; ${geo.lng})`
    );

  data.map(({ name, address }) => {
    console.log(`Name: ${name}`);
    showAddress(address);
  });
}

showUsersInfo();
