document.write("<table>");
for (let i = 1; i <= 3; i++) {
  document.write("<tr>");
  for (let i = 1; i <= 7; i++) {
    document.write(`<td> ${i} </td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
