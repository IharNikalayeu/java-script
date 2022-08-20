//Задача 6. Дан массив [{name:'Bogdan', age: '20'}, {name:'Vlad', age: '20'}]. Получить массив вида ['Name: Bogdan, Age: 20', ...]

const array = [
  { name: "Bogdan", age: "20" },
  { name: "Vlad", age: "20" },
];
const resArray = array.map(({ name, age }) => `Name: ${name}, Age: ${age}`);
console.log(resArray);
