let yearOfBirth = parseInt(prompt(`Введіть рік нарождення`));
let currentYear = new Date().getFullYear();
let yearsOld = currentYear - yearOfBirth;

document.write(`Відповідь: ${yearsOld}`);
