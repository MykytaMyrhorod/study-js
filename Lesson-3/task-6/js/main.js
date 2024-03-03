const weekNumber = parseInt(prompt("Введіть номер дня тижня"));
let result;

switch (weekNumber) {
  case 1:
    result = "Понеділок";
    break;
  case 2:
    result = "Вівторок";
    break;
  case 3:
    result = "Середа";
    break;
  case 4:
    result = "Четвер";
    break;
  case 5:
    result = "Пʼятниця";
    break;
  case 6:
    result = "Субота";
    break;
  case 7:
    result = "Неділя";
    break;
  default:
    result = "Введіть номер дня тижня від 1 до 7";
    break;
}
document.write(result);
