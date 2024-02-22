let a = parseFloat(prompt(`Введіть значення a`));
let b = parseFloat(prompt(`Введіть значення b`));
let c = parseFloat(prompt(`Введіть значення c`));

let s1 = a + 12 + b;
let s2 = Math.sqrt((a + b) / (2 * a));
let s3 = Math.cbrt((a + b) * c);
let s4 = Math.sin(a / -b);

document.write(`
<p>
s1 = ${s1}
<br />
s2 = ${s2}
<br />
s3 = ${s3}
<br />
s4 = ${s4}
</p>
`);
