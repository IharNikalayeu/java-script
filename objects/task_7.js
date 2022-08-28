// 7. Описание задачи: Поменять местами ключ и значение в объекте
//    Ожидаемый результат: { a: 1, b: 2 } => { '1': 'a', '2': 'b' }

const obj = { a: 1, b: 2 };

const swapObj = (obj) => {
  const newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }
  return newObj;
};

console.log(swapObj(obj));

console.log("Арсенал лучший клуб мира!");
