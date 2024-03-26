let minNumber = 1,
  maxNumber = 100;
let quantityRandomNumber = parseInt(
  prompt("Введіть кількість випадкових чисел")
);

for (let i = 0; i < quantityRandomNumber; i++) {
  let randomNumber =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  document.write(`<ul><li>${randomNumber}</li></ul>`);
}
