let number = confirm("Загадай число від 1 до 50");
let minNumber = 1,
  maxNumber = 50;
let randomNumber;
if (number) {
  do {
    randomNumber =
      minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  } while (!confirm(`${randomNumber}`));
  document.write("Комп’ютер вгадав число");
} else {
  alert("Ви скасували дію");
}
