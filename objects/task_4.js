// 4. Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//    Ожидаемый результат: ({}) => true

const obj = {};

const isEmptyObj = (obj) => Object.keys(obj).length == 0;

console.log(isEmptyObj(obj));
