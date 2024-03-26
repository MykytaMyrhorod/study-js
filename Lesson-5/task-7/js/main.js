const quantity = parseInt(prompt("Введіть кількість абзаців"));

for (let i = 1; i <= quantity; i++) {
  document.write(`<h1>Заголовок ${i}</h1>`);
  for (let k = 1; k <= i; k++) {
    document.write(`<p>Розділ ${i}, параграф ${k}</p>`);
  }
  document.write(`<hr>`);
}
