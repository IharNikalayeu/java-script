//Задача 7. Дан массив ['green', 'yellow', 'red']. Определить есть ли в массиве 'red' (Boolean)

const array = ["green", "yellow", "red"];
const hasRed = array.some((element) => element === "red");
console.log(hasRed);
