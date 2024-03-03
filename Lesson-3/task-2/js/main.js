const priceProduct = parseFloat(prompt("Введіть ціну товару"));
const quantityMoney = parseFloat(prompt("Введіть кількість грошей"));
const lotteryPrice = 4;

if (quantityMoney >= priceProduct) {
  document.write("Ви купили товар");
  if (quantityMoney - priceProduct >= lotteryPrice)
    document.write("<br>пропонуємо купити лотерею за 4 грн");
} else document.write("у вас не вистачає грошей");
