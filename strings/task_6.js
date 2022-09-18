// 6*. Удалить лишние пробелы из строки. Пример: '   каждый охотник    желает   знать  что-то     ' -> 'каждый охотник желает знать что-то'

const textWithExtraSpaces =
  "    Как ни крути        Арсенал все еще лучшая         команда мира";

const textWithoutExtraSpaces = (textWithExtraSpaces) =>
  textWithExtraSpaces.trim().replace(/ +/g, " ");

console.log(textWithoutExtraSpaces(textWithExtraSpaces));
