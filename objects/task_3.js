// 3. Скопировать все свойства одного объекта в другой

const sourceObj = { a: 1, b: 2 };

const copyObj = (sourceObj) => Object.assign({}, sourceObj);

console.log(copyObj(sourceObj));
