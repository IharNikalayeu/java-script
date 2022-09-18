// 2. Дана строка '28.02.2000', преобразовать в дату, добавить 3 дня и вывести в консоль в формате dd.mm.yyyy

const text = "28.02.2000";

const addDays = (countDays, day, month, year) => {
  const curDate = new Date(year, month - 1, day);

  curDate.setMinutes(curDate.getMinutes() - curDate.getTimezoneOffset());

  curDate.setDate(curDate.getDate() + countDays);

  return curDate;
};

const dateFormat = (date) =>
  ("0" + date.getDate()).slice(-2) +
  "." +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "." +
  date.getFullYear();

console.log(dateFormat(addDays(3, ...text.split("."))));
