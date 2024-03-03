const driverCategory = prompt("введіть категорію водія");
let result;

switch (driverCategory) {
  case "A":
    result = "А-мотоцикл";
    break;
  case "B":
    result = "В-легковий автомобіль";
    break;
  case "C":
    result = "С-вантажний автомобіль";
    break;
  default:
    result = "помилка";
    break;
}
document.write(result);
