let minMonthNumber = Math.ceil(1);
let maxMonthNumber = Math.floor(12);

let minDayNumber = Math.ceil(0);
let maxDayNumber = Math.floor(6);

let randomMonthNumber = Math.floor(
  Math.random() * (maxMonthNumber - minMonthNumber + 1) + minMonthNumber
);
let randomDayNumber = Math.floor(
  Math.random() * (maxDayNumber - minDayNumber + 1) + minDayNumber
);

let sum = randomMonthNumber + randomDayNumber;

document.write(
  `Випадковий номер місяці: ${randomMonthNumber} <br> Випадковий номер дня: ${randomDayNumber} <br> Загальна сума: ${sum}`
);
