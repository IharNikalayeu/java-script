// 7*. Удалить все точки из текста.

const textWithDots = "Как ни кру.ти Арсенал все. ещ.е лучшая к.оманда мира.";

const textWithoutDots = (textWithDots) => textWithDots.replace(/\./g, "");

console.log(textWithoutDots(textWithDots));
