// 1. Преобразовать первую букву строки в верхний регистр.

const text = "arsenal is the best football club in the world";

const upperFirstLetter = (text) =>
  text ? text[0].toUpperCase() + text.slice(1) : text;

console.log(upperFirstLetter(text));
