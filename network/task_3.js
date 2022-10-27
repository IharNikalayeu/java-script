//Вывести в консоль name, username, mail, phone пользователей, у которых phone начинается с "1"

async function showUsersInfo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();

  data
    .filter(({ phone }) => phone.startsWith("1"))
    .forEach(({ name, username, email, phone }) => {
      console.log(
        `Name: ${name}, username: ${username}, email: ${email}, phone: ${phone}`
      );
    });
}

showUsersInfo();
