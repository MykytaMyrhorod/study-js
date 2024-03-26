let number = 0;
document.write("<table>");
for (let i = 1; i <= 3; i++) {
  document.write("<tr>");
  for (let i = 1; i <= 3; i++) {
    number++;
    document.write(`<td>${number}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
