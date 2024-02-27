let centimeter = parseFloat(prompt(`Введіть довжину у сантиметрах`));
let meter = centimeter / 100;
let kilometer = meter / 1000;

document.write(
  `Відповідь: <br> Значення у сантиметрах: ${centimeter} см <br> Значення у метрах: ${meter} м <br> Значення у кілометрах: ${kilometer} км`
);
