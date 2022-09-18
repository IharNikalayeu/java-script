// 1. Вывести в консоль текущую дату в формате dd.mm.yyyy hh:mm

const currentDate = new Date();

console.log(currentDate);

const dateFormat = (currentDate) =>
  ("0" + currentDate.getDate()).slice(-2) +
  "." +
  ("0" + (currentDate.getMonth() + 1)).slice(-2) +
  "." +
  currentDate.getFullYear() +
  " " +
  ("0" + currentDate.getHours()).slice(-2) +
  ":" +
  ("0" + currentDate.getMinutes()).slice(-2);

console.log(dateFormat(currentDate));
