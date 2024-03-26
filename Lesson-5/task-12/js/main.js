let minNumber = 1,
  maxNumber = 4;
let urlImg;
let numberWin = "";
let result;
document.write('<div class="wrapper">');
for (let i = 0; i < 3; i++) {
  let randomImg =
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  switch (randomImg) {
    case 1:
      urlImg = '<img src="img/1.png" />';
      break;
    case 2:
      urlImg = '<img src="img/2.png" />';
      break;
    case 3:
      urlImg = '<img src="img/3.svg" />';
      break;
    case 4:
      urlImg = '<img src="img/4.svg" />';
      break;
  }
  document.write(`<div>${urlImg}</div>`);
  numberWin += `${randomImg}`;
}
document.write("</div>");

switch (numberWin) {
  case "111":
    result = "Ви виграли 100 грн";
    break;
  case "222":
    result = "Ви виграли 200 грн";
    break;
  case "333":
    result = "Ви виграли 500 грн";
    break;
  case "444":
    result = "Ви виграли 1000 грн";
    break;
  default:
    result = "Ви нічого не виграли";
    break;
}
document.write(`${result}`);
