//Задача 10. Дан массив [{name:'Bogdan', age: '17'}, {name:'Vlad', age: '20'}]. Получить массив из элементов 18+ (Boolean)

const array = [
  { name: "Bogdan", age: "17" },
  { name: "Vlad", age: "20" },
];
const res = array.filter(({ age }) => age >= 18);
console.log(res);
