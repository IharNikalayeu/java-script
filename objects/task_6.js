// 6. Преобразовать объект в Map и наоборот

const obj = {
  firstName: "Ihar",
  lastName: "Nikalayeu",
};

const map = new Map([
  ["firstName", "Ihar"],
  ["lastName", "Nikalayeu"],
]);

const mapToObject = (map) => Object.fromEntries(map);

const objectToMap = (obj) => new Map(Object.entries(obj));

console.log(mapToObject(map));

console.log(objectToMap(obj));
