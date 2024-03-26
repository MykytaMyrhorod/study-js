const firstNumber = parseFloat(prompt("Введіть перше число"));
const SecondNumber = parseFloat(prompt("Введіть друге число"));
let sumNumber = 0;

for (let number = firstNumber; number <= SecondNumber; number++) {
  if (number % 2 !== 0) {
    sumNumber += number;
  }
}
document.write(`Сума непраних чисел: ${sumNumber}`);
