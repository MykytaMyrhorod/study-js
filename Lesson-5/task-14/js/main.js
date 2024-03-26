let minNumber = 1,
  maxNumber = 1000;
let randomNumber =
  minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
let restSum = 0;
do {
  restSum += parseFloat(
    prompt(
      `Вам потрібно сплатити ${
        randomNumber - restSum
      } грн, введіть суму грошей для оплати `
    )
  );
} while (randomNumber > restSum);
restSum > randomNumber
  ? document.write(`Ви сплатили всю суму, ваша решта ${restSum - randomNumber}`)
  : document.write("Ви сплатили всю суму");
