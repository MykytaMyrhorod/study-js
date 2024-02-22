let firstNumber = parseFloat(prompt(`Введіть перше число`));
let secondNumber = parseFloat(prompt(`Введіть друге число`));
let sum = firstNumber + secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

document.write(`
<table border="1">
<tr>
  <td>Сума</td>
  <td>${sum}</td>  
</tr>
<tr>
   <td>Добуток</td>
   <td>${mult}</td>
</tr>
<tr>
  <td>Частка</td>    
  <td>${div}</td>
</tr>
</table>
`);
