// 2. Дана строка '28.02.2000', преобразовать в дату, добавить 3 дня и вывести в консоль в формате dd.mm.yyyy

const textDate = "28.02.2000";

const addDays = (textDate, countDays) => {
  [day, month, year] = textDate.split(".");

  const curDate = new Date(Date.UTC(year, month - 1, day));

  curDate.setDate(curDate.getDate() + countDays);

  return curDate;
};

console.log(
  addDays(textDate, 3).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })
);
