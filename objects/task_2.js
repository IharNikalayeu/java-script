// 2. Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
//    Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }

const obj = { a: 1, b: 2 };
const delKey = "b";

const getNewObj = (obj, ...delKey) => {
  const newObj = { ...obj };
  newObj.forEach((item) => {
    delete newObj[item];
  });

  return newObj;
};

console.log(getNewObj(obj, delKey));
