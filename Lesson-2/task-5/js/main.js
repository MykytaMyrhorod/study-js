let seconds = parseFloat(prompt(`Введіть кількість секунд`));

let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600) / 60);

document.write(
  `Відповідь: <br> Кількість секунд: ${seconds} <br> Кількість годин: ${hours} <br> Кількість хвилин ${minutes}`
);
