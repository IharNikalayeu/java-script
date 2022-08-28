// 5. Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
//    Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const objFirst = { a: 1, b: 1 };

const objSecond = { a: 1, b: 1 };

const isEqual = (objFirst, objSecond) => {
  const keysOfFirstObj = Object.keys(objFirst);
  const keysOfSecondObj = Object.keys(objSecond);

  if (keysOfFirstObj.length != keysOfSecondObj.length) {
    return false;
  }

  for (let key of keysOfFirstObj) {
    if (objFirst[key] != objSecond[key]) return false;
  }

  return true;
};

console.log(isEqual(objFirst, objSecond));
