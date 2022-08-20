//Задача 7. Дан массив ['green', 'yellow', 'red']. Определить есть ли в массиве 'red' (Boolean)

const array = ["green", "yellow", "red"];
const hasRed = array.some((color) => color === "red");
console.log(hasRed);
