// 7. Описание задачи: Поменять местами ключ и значение в объекте
//    Ожидаемый результат: { a: 1, b: 2 } => { '1': 'a', '2': 'b' }

const obj = { a: 1, b: 2 };

const swapObj = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};

console.log(swapObj(obj));
