//Задача 6. Дан массив [{name:'Bogdan', age: '20'}, {name:'Vlad', age: '20'}]. Получить массив вида ['Name: Bogdan, Age: 20', ...]

const array = [
  { name: "Bogdan", age: "20" },
  { name: "Vlad", age: "20" },
];
const resArray = [];
array.forEach((element) => {
  resArray.push(`Name: ${element.name}, Age: ${element.age}`);
});
console.log(resArray);
