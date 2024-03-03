const monthNumber = parseInt(prompt("Введіть номер місяця"));
let result;

if (monthNumber === 12 || monthNumber <= 2) result = "зима";
else if (monthNumber <= 5) result = "весна";
else if (monthNumber <= 8) result = "літо";
else if (monthNumber <= 11) result = "осінь";
document.write(result);
