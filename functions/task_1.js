// 1. Написать функцию для подсчета суммы sum(a, b, ...), количество параметров неограниченно (3 вида функции)

// function declaration
function sum_v1(...numbers) {
  return numbers.reduce((sum, curNumber) => sum + curNumber, 0);
}
console.log(sum_v1(10, 5, 6, 8));

// function expression
const sum_v2 = function (...numbers) {
  return numbers.reduce((sum, curNumber) => sum + curNumber, 0);
};
console.log(sum_v2(1, 2, 3, 4));

// arrow function
const sum_v3 = (...numbers) =>
  numbers.reduce((sum, curNumber) => sum + curNumber, 0);
console.log(sum_v3(1, 2, 3, 4, 5, -10));
