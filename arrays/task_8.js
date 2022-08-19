//Задача 8. Дан массив [{name:'Bogdan', age: '17'}, {name:'Vlad', age: '20'}]. Определить есть ли в массиве чел с возрастом < 18 (Boolean)

const arrayOb = [
  { name: "Bogdan", age: "17" },
  { name: "Vlad", age: "20" },
];
const isMinor = (arrayOb) => {
  for (let key in arrayOb) {
    if (arrayOb[key].age < 18) return true;
  }
  return false;
};
console.log(isMinor(arrayOb));
