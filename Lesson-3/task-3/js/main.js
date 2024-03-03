const minRandomNumber = 1;
const maxRandomNumber = 5;
const randomNumber =
  minRandomNumber +
  Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1));

const firstRandomNumber = parseInt(
  prompt("Перша спроба - Введіть число від 1 до 5 ")
);
const secondRandomNumber = parseInt(
  prompt("Друга спроба - Введіть число від 1 до 5 ")
);
if (firstRandomNumber === randomNumber || secondRandomNumber === randomNumber)
  document.write(`Ви вгадали! Число було: ${randomNumber}`);
else document.write(`На жаль, ви не вгадали! Число було: ${randomNumber}`);
