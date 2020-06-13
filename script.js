// 1

let name = prompt("Твоє імя?");

alert("Привіт" + name);

// 2

let age = prompt("Твій вік?");

const year = 2020;

alert(year - age);

// 3

let cube = prompt("Довжина квадрата?");

alert(cube * 4);

// 4

let radius = prompt("Вкажіть радіус?");

alert(radius * radius);

// 5

let way = prompt("Вкажіть відстань між двома містами");
let time = prompt("Вкажіть за скільки годин хочете подолати відстань?");

alert(way / time);

// 6

let dollar = prompt("Вкажіть суму");

const euro = 0.885;

alert(dollar * euro);

// 7

let gb = prompt("Вкажіть обєм флешки");

alert((gb * 1000) / 820);

// 8

let capital = prompt("Вкажіть суму ваших грошей в гаманці");
let price = prompt("Вкажіть вартість шоколадки");

alert(capital / price);

// 9

let letNumber = prompt("Вкажіть трьохзначне число");

alert(letNumber.split("").reverse().join(""));

// 10

let credit = prompt("Вкажіть суму вкладу");

let procent = 0.05;

alert(credit * (procent / 6));
