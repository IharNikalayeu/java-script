//Задача 4. Дан массив [1, -1, 2, 3, 0, 4]. Получить массив положительных элементов

const array = [1, -1, 2, 3, 0, 4];
const arrayOfPositiveElements = array.filter((value) => value > 0);
console.log(arrayOfPositiveElements);
