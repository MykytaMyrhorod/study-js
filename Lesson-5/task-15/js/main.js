let quantityMonths = 12;
let temperatures = 0;
for (let numberMonths = 1; numberMonths <= quantityMonths; numberMonths++) {
  let userTemperatures = parseFloat(
    prompt(`Введіть температуру за ${numberMonths} місяць`)
  );
  temperatures += userTemperatures;
}
let averageTemperatures = temperatures / quantityMonths;
document.write(
  `Cередня температура протягом року : ${averageTemperatures.toFixed(2)}`
);
