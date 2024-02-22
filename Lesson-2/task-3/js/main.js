let quantityOfProducts = parseFloat(prompt(`Введіть вартість товару`));
let priceOfProduct = parseFloat(prompt(`Введіть кількість товару`));

const stateSalesTax = 5;

let totalPrice = priceOfProduct * quantityOfProducts;
let totalStateSalesTax = (totalPrice * stateSalesTax) / 100;

document.write(
  `Загальна вартість: ${totalPrice} <br> ПДВ: ${totalStateSalesTax}`
);
