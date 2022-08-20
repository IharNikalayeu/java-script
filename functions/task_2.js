// 2. Написать функцию для вывода имени и возвраста пользователя getUserInfo(user). Исходные данные users: [{ name: 'Bogdan', age: 16 }, { name: 'Vladislav' }, {}]

const users = [{ name: "Bogdan", age: 16 }, { name: "Vladislav" }, {}];
const getUserInfo = ({ name, age }) =>
  console.log(`Name: ${name || "-"}, Age: ${age || "-"}`);
users.forEach(getUserInfo);
