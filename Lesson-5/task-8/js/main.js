const number = confirm("Загадай число від 1 до 50");
let minNumber = 1,
  maxNumber = 50;
let result;

for (let i = 1; i <= 3; i++) {
  let randomNumber =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  if (confirm(`${randomNumber}`)) {
    result = "Комп’ютер вгадав число";
    break;
  } else {
    result = "Комп’ютер не вгадав число";
  }
}
document.write(result);
