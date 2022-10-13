//Вывести в консоль name, username, mail, phone пользователей, у которых phone начинается с "1"

let data;

async function showUsersInfo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  data = await response.json();

  data.map(({ name, username, email, phone }) => {
    if (phone.startsWith("1"))
      console.log(
        `Name: ${name}, username: ${username}, email: ${email}, phone: ${phone}`
      );
  });
}

showUsersInfo();
