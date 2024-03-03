const firstNameChild = prompt("Введіть ім'я першої дитини");
const quantityСandiesFirstChild = parseInt(
  prompt("Введіть кількість цукерок у першої дитини")
);
const SecondNameChild = prompt("Введіть ім'я другої дитини");
const quantityСandiesSecondChild = parseInt(
  prompt("Введіть кількість цукерок у другої дитини")
);
let result;

if (quantityСandiesFirstChild > quantityСandiesSecondChild)
  document.write(
    `ім’я дитини, у якої кількість цукерок є більшою: ${firstNameChild}`
  );
else if (quantityСandiesFirstChild == quantityСandiesSecondChild)
  document.write("кількість цукерок однакова");
else
  document.write(
    `ім’я дитини, у якої кількість цукерок є більшою: ${SecondNameChild}`
  );
