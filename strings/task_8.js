// 8*. Вернуть количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u», «y».

const text = "Arsenal in my heart!";

const getCountVowels = (text) => text.match(/[aeiouy]/ig)?.length || 0;

console.log(getCountVowels(text));
