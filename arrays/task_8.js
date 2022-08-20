//Задача 8. Дан массив [{name:'Bogdan', age: '17'}, {name:'Vlad', age: '20'}]. Определить есть ли в массиве чел с возрастом < 18 (Boolean)

const arrayObj = [
  { name: "Bogdan", age: "17" },
  { name: "Vlad", age: "20" },
];
const hasMinor = arrayObj.some(({ age }) => age < 18);
console.log(hasMinor);
