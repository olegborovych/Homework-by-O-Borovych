// 1

// let item0 = {
//     name: 'Bread',
//     num: 2,
//     buy: 'yes',
// }

// let item1 = {
//     name: 'Meat',
//     num: 1,
//     buy: 'yes',
// }

// let item2 = {
//     name: 'Water',
//     num: 3,
//     buy: 'no',
// }

// let item3 = {
//     name: 'Solt',
//     num: 1,
//     buy: 'no',
// }

// let buyList = [item0, item1, item2, item3];

// // todo
// function newList(arr) {
//     let newArr = [];
//     arr.forEach(item => item.buy === "no" ? newArr.unshift(item) : newArr.push(item));
//     return newArr;

// };

// console.table(newList(buyList));

// 2

// let check = [
//     {
//         name: "Bread",
//         num: 2,
//         cost: 10,
//     },
//     {
//         name: "Water",
//         num: 1,
//         cost: 15,
//     },
//     {
//         name: "Meat",
//         num: 2,
//         cost: 100,
//     },
//     {
//         name: "Solt",
//         num: 1,
//         cost: 8,
//     },
// ]
// // Чек
// function checkView(arr) {
//     arr.forEach((item) => (`${item.name} 1x${item.num} ${item.num * item.cost}`))
// }

// console.table(check);

// //todo Загальний рахунок



// //todo Середня вартість
// function suma(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length;) {
//         sum = sum + arr[i].cost;
//         i++;
//         if (i === arr.length) { return sum / i };
//     }
// }
// console.log(suma(check));



// 3

// let css = [];

// function newCss(property, value) {
//     let Css = {
//         property,
//         value
//     }
//     css.push(Css);
// }

// newCss('font-size', '14px');
// newCss('color', 'black');
// newCss('text-align', 'center');
// newCss('font-weight', '40px');
// newCss('text-decoration', 'underline');

// function res(arr, lorem) {
//     let css = arr.reduce((akm, item) => akm += item.option + ':' + item.value + ';', '');
//     document.write(`<p css = "${css}" > ${lorem}</p> `);
// }

// res(css, "lorem lorem lorem lorem lorem lorem lorem lorem lorem");



//4 

// let rooms = [
//     {
//         name: 'History',
//         number: 20,
//         facultet: 'history',
//     },
//     {
//         name: 'Nature',
//         number: 10,
//         facultet: 'Engineery',
//     },
//     {
//         name: 'Philology',
//         number: 40,
//         facultet: 'Philology',
//     },
//     {
//         name: 'Tourism',
//         number: 15,
//         facultet: 'Tourism',
//     },
// ]

// rooms.forEach((item) => {
//     document.write(`Аудиторія: ${item.name}<br>К-сть місць: ${item.number}<br>Факультет: ${item.facultet}<br><hr>`);
// });

// rooms.forEach((item) => {
//     document.write(`Аудиторія: ${item.name}<br><hr>`);
// });
