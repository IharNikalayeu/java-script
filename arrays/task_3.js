//Задача 3. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей и массив значений

const obj = {
  js: "test",
  jq: "hello",
  css: "world",
};
const getArrayOfKeys = (obj) => Object.keys(obj);
const getArrayOfValue = (obj) => Object.values(obj);
console.log(getArrayOfKeys(obj));
console.log(getArrayOfValue(obj));
