//Задача 9. Дан массив [{name:'Bogdan', age: '17'}, {name:'Vlad', age: '20'}]. Определить все ли 18+ (Boolean)

const array = [
  { name: "Bogdan", age: "17" },
  { name: "Vlad", age: "20" },
];
const res = array.every(({ age }) => age >= 18);
console.log(res);
