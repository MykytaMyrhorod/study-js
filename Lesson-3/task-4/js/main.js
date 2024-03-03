const personAge = parseInt(prompt("Введіть вік людини"));
let result;
if (personAge <= 7) result = "дитина у садочку";
else if (personAge <= 17) result = "школяр";
else if (personAge <= 30) result = "студент";
else if (personAge <= 65) result = "працівник";
else result = "пенсіонер";
document.write(result);
