//Задача 4. Дан массив [1, -1, 2, 3, 0, 4]. Получить массив положительных элементов

const array = [1, -1, 2, 3, 0, 4];
const arrayOfPositiveNumbers = array.filter((number) => number > 0);
console.log(arrayOfPositiveNumbers);
