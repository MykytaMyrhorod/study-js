const firstNumber = parseFloat(prompt("Введіть перше число"));
const SecondNumber = parseFloat(prompt("Введіть друге число"));
let sumNumber = 0;
let quantity = 0;

for (let number = firstNumber; number <= SecondNumber; number++) {
  if (number % 2 !== 0) {
    sumNumber += number;
    quantity++;
  }
  if (quantity === 5) break;
}
document.write(`Сума 5 непраних чисел: ${sumNumber}`);
