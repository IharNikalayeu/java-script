//Задача 3. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей и массив значений

const ob = {
  js: "test",
  jq: "hello",
  css: "world",
};
const getArrayOfKeys = (ob) => Object.keys(ob);
const getArrayOfValue = (ob) => Object.values(ob);
console.log(getArrayOfKeys(ob));
console.log(getArrayOfValue(ob));
