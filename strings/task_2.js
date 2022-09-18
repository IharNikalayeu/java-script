// 2. Преобразовать первую букву каждого слова строки в верхний регистр.

const text = "arsenal is the best football club in the world";

const upperFirstLetter = (text) => {
  if (!text) return text;
  return text[0].toUpperCase() + text.slice(1);
};

const separator = " ";

const summaryString = text
  .split(separator)
  .reduce(
    (prevWord, currWord) => prevWord + separator + upperFirstLetter(currWord),
    ""
  );

console.log(summaryString);
