let minNumber = 1,
  maxNumber = 1000;
let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < 100; i++) {
  let randomNumber =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  if (randomNumber % 2 === 0) {
    evenNumber++;
  } else {
    oddNumber++;
  }
}
if (evenNumber > oddNumber) {
  document.write(`парних чисел більше ${evenNumber}`);
} else {
  document.write(`непарних чисел більше ${oddNumber}`);
}
