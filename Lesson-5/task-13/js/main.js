let quantityBullets = parseInt(prompt("Введіть кількість снарядів"));
const rowNumber = 5;
const colNumber = 5;
let randomRowNumber = 1 + Math.floor(Math.random() * rowNumber);
let randomColNumber = 1 + Math.floor(Math.random() * colNumber);

for (let i = 0; i < quantityBullets; i++) {
  let userRow = parseInt(prompt("Введіть номер рядка"));
  let userCol = parseInt(prompt("Введіть номер стовпця"));
  if (userRow === randomRowNumber && userCol === randomColNumber) {
    alert("Попав!");
    break;
  } else {
    alert("Не попав!");
  }
}
