// 3. Преобразовать строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

const text = "arsenal_is_the_best_football_club_in_the_world";

const upperFirstLetter = (text) => {
  if (!text) return text;
  return text[0].toUpperCase() + text.slice(1);
};

const separator = "_";

const summaryString = text
  .split(separator)
  .reduce((prevWord, currWord) => prevWord + upperFirstLetter(currWord));

console.log(summaryString);
