// 3. Дан массив [{name:'Bogdan', age: '20'}, {name:'Vlad', age: '20'}]. Получить массив вида ['Name: Bogdan, Age: 20', ...]. Получение строк вынести в функцию

const users = [
  { name: "Bogdan", age: "20" },
  { name: "Vlad", age: "20" },
];
const getUserToString = ({ name, age }) => `Name: ${name}, Age: ${age}`;
const usersToString = users.map(getUserToString);
console.log(usersToString);
