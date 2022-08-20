//Задача 5. Дан массив [1, -1, 2, 3, 0, 4]. Определить являются ли все числа положительными (Boolean)

const array = [1, -1, 2, 3, 0, 4];
const numbersPositive = array.every((number) => number > 0);
console.log(numbersPositive);
