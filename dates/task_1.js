// 1. Вывести в консоль текущую дату в формате dd.mm.yyyy hh:mm

console.log(
  new Date().toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
);
