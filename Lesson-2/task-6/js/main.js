let firstProductPrice = parseFloat(prompt(`Введіть вартість першого товару`));
let firstProductQuantity = parseInt(prompt(`Введіть кількість першого товару`));
let secondProductPrice = parseFloat(prompt(`Введіть вартість другого товару`));
let secondProductQuantity = parseInt(
  prompt(`Введіть кількість другого товару`)
);
let thirdProductPrice = parseFloat(prompt(`Введіть вартість третього товару`));
let thirdProductQuantity = parseInt(
  prompt(`Введіть кількість третього товару`)
);

let firstProductCost = firstProductPrice / firstProductQuantity;
let secondProductCost = secondProductPrice / secondProductQuantity;
let thirdProductCost = thirdProductPrice / thirdProductQuantity;

let totalPrice = firstProductPrice + secondProductPrice + thirdProductPrice;

document.write(`
<div class="check">
<h2 class="check__title">чек</h2>
<div class="check-container">
  <div class="check-container__first">
    <span>Перший товар:</span>
    <div class="check-container__first-top">
      <p class="check-container__first-top-quantity">${firstProductQuantity} x</p>
      <p class="check-container__first-top-price">${firstProductCost.toFixed(
        2
      )}</p>
    </div>
    <div class="check-container__first-bottom">
      <p class="check-container__first-bottom-total">
        Вартість першого товару:
      </p>
      <p class="check-container__first-bottom-total-price">${firstProductPrice.toFixed(
        2
      )}</p>
    </div>
  </div>
  <span class="line"></span>
  <div class="check-container__second">
      <span>Другий товар:</span>
      <div class="check-container__second-top">
        <p class="check-container__second-top-quantity">${secondProductQuantity}</p>
        <p class="check-container__second-top-price">${secondProductCost.toFixed(
          2
        )}</p>
      </div>
      <div class="check-container__second-bottom">
        <p class="check-container__second-bottom-total">
          Вартість другого товару:
        </p>
        <p class="check-container__second-bottom-total-price">${secondProductPrice.toFixed(
          2
        )}</p>
      </div>
    </div>
    <span class="line"></span>
  </div>
  <div class="check-container__third">
      <span>Третій товар:</span>
      <div class="check-container__third-top">
        <p class="check-container__third-top-quantity">${thirdProductQuantity}</p>
        <p class="check-container__third-top-price">${thirdProductCost.toFixed(
          2
        )}</p>
      </div>
      <div class="check-container__third-bottom">
        <p class="check-container__third-bottom-total">
          Вартість третього товару: 
        </p>
        <p class="check-container__third-bottom-total-price">${thirdProductPrice.toFixed(
          2
        )}</p>
      </div>
    </div>
    <span class="line"></span>
    <p class="total-price">
      Загальна сума: ${totalPrice.toFixed(2)}
  </p>
  </div>
</div>
</div>`);
