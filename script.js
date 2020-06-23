'use strict'

// -------------------------------1----------------------------

// let a = Number(prompt("Введи початок діапазону", ""));
// let n = Number(prompt("Введи кінець діапазону", ""));
// let sum = 0;

// while (a <= n) {
//     sum += a;
//     a++;
// }
// console.log(sum)

// -------------------------------2----------------------------

// let a = prompt('Введіть перше число')
// let b = prompt('Введіть друге число')
// let sum = a % b;

// while (sum != 0) {
//     a = m;
//     sum = a % b;
//     console.log(sum)
// }

// -------------------------------3----------------------------

// let number = prompt('Введіть число');
// for (let i = 1; i <= number; i++) {
//     if (number % i == 0 && number == !number && number == !1) {
//         console.log(i)
//     }
// }

// -------------------------------4----------------------------

// let a = prompt('Введіть число, а я порахую кількість цифр')
// console.log((a).length)

// -------------------------------5----------------------------

// let a = prompt('Введіть 10-значне число');
// alert((parseInt(a) % 2 == 0) ? 'парне' : 'не парне');

// -------------------------------6----------------------------

// let res;

// do {
//     let a = +prompt("ВВедіть перше число");
//     let operator = prompt("Вкажіть дію [+ - * /]");
//     let b = +prompt("Введіть друге число");

//     switch (operator) {
//         case "+":
//             alert(`${a}+${b}=${a + b}`);
//             break;
//         case "*":
//             alert(`${a}*${b}=${a * b}`);
//             break;
//         case "/":
//             alert(`${a}/${b}=${a / b}`);
//             break;
//         case "-":
//             alert(`${a}-${b}=${a - b}`);
//             break;
//         default: alert("нема такого символа");
//     }

//     res = confirm("Ще раз?")

// } while (res);


// -------------------------------7----------------------------

// const num = prompt("Введіть число");
// const num2 = +prompt("Введіть на скільки посунути число");
// console.log(`${num.substring(num2, num.length) + num.substring(0, num2)}`)

// -------------------------------8----------------------------

// let dateDay = +prompt(`Введіть дату: число місяця`);
// let dateMonth = +prompt(`Введіть дату: місяць`);
// let dateYear = +prompt(`Введіть дату: рік`);

// if (dateDay <= 30) {
//     dateDay++;
//   } else if (dateDay === 31) {
//     dateDay = 01;
//     dateMonth++;
//   } else {
//     Alert(`не вірні дані`);
// }

// if (dateMonth >= 13) {
//     dateMonth -= 12;
//     dateYear++;
// }

// else if (
//     (dateMonth === 4 || dateMonth === 6 || dateMonth === 9 || dateMonth === 11) && dateDay >= 31 )
//   {
//     dateDay = 01;
//     dateMonth++;
//   }
//   alert(`Завтра ${dateDay}.${dateMonth}.${dateYear}`);
// }

// -------------------------------9----------------------------

// let table = [];

// for (let i = 2; i <= 9; i++) {
//     let valueFromTable = [];
//     for (j = 1; j <= 10; j++) {
//         valueFromTable[j - 1] = `${i}*${j}=${i * j}`;
//     }
//     table[i - 2] = table;
// }

// for (i = 0; i < table.length; i++) {
//     console.log(table[i]);
// }

// -------------------------------10---------------------------

// const number = +prompt("Введи число від 0 дo 100");
// let range = [0, 100];
// let n = true;

// do {
//     let assumption = Math.floor((range[0] + range[1]) / 2);
//     let symbol = prompt(`Твоє число ==${assumption}, <${assumption}, >${assumption}\nEnter symbol`);

//     switch (symbol) {
//         case "==":
//             n = false;
//             alert(`Твоє число is ${assumption}`);
//             break;

//         case "<":
//             range[1] = assumption - 1;
//             break;

//         case ">":
//             range[0] = assumption + 1;
//             break;

//         default:
//             alert("Undefined symbol");
//             n = false;
//     }
// } while (n);