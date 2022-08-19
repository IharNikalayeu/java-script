//Задача 1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
const mergeArrays = (arrayOne, arrayTwo) => [...arrayOne, ...arrayTwo];
console.log(mergeArrays(arrayOne, arrayTwo));
