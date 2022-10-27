// Есть массив ['Right', 'Bottom', 'Left', 'Top'].
// Написать функцию получения значений из массива:
// getPosition(1) // Bottom
// ...
// getPosition(4) // Right
// ...
// getPosition(6) // Left

const arr = ["Right", "Bottom", "Left", "Top"];

const getPosition = (index) => arr[index % arr.length];

console.log(getPosition(8));
