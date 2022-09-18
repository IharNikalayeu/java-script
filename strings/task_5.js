// 5. Есть в строке слова заканчивающиеся на '-ов'. Результат Boolean

const text = "Аусбург 1-0 Бавария. Забил БеришОв!!!";

const hasWord = (text) => text.search(/ов[^а-я]/i) >= 0;

console.log(hasWord(text));
