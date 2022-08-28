// 1. Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
//    Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const obj = { a: 1, b: 2 };

const objectToArray = (obj) => Object.entries(obj);

console.log(objectToArray(obj));
