/* 1) Реализовать класс, описывающий окружность.
В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности. */

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     get backRadius() {
//         return this.radius;
//     }

//     set backRadius(newRad) {
//         this.radius = newRadios;
//     }

//     get diametr() {
//         return this.radius * 2;
//     }

//     circleSquare() {
//         return this.radius * Math.PI;
//     }

//     circleLong() {
//         return this.radius * 2 * Math.PI;
//     }
// }

// let r = new Circle(30);

// console.log(`Radius : ${r.backRadius}`)

// console.log(`New radius : ${r.backRadius}`)

// console.log(`Diametr : ${r.diametr}`)

// console.log(`Square: ${r.circleSquare()}`)

// console.log(`Long: ${r.circleLong()}`)


// 2) Реализовать класс, описывающий простой маркер.

// class Marker {
//     constructor(color, amount) {
//         this.color = color;
//         this.amount = amount;
//     }

//     print(text) {
//         document.write(`<h1 style="color: ${this.color}">${text.slice(0, this.amount / 0.5)}</h1>`)
//     }
// }

// let blue = new Marker("blue", 10);

// blue.print("qweerty qwerty qwerty");


// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// class Employee {
//     constructor(firstName, lastName, age, salary, pos) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.salary = salary;
//         this.pos = pos;
//     }
// }

// let humans = [
//     new Employee('Oleg', 'Borovych', 23, 10000, 'Director'),
//     new Employee('John', 'Travolta', 50, 8000, 'Engineer'),
//     new Employee('Valera', 'Noname', 33, 12000, 'Top-Manager'),
//     new Employee('Petro', 'Poroshenko', 60, 200, 'ex-Director'),
//     new Employee('Vasya', 'Belarus', 20, 13000, 'Investor'),
// ];

// class EmpTable {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     getHtml() {
//         document.write(`<table border="5">`);
//         document.write(`<tr>`);

//         for (const i in Object.keys(this.arr)) {
//             document.write(`<th>${Object.keys(this.arr[0])[i]}</th>`)
//         };
//         document.write(`</tr>`);


//         this.arr.forEach(function (items) {
//             document.write(`<tr>`);
//             for (const i in items) {
//                 document.write(`<td>${items[i]}</td>`)
//             };
//             document.write(`</tr>`)
//         });
//         document.write(`</table>`)
//     }
// }

// let html = new EmpTable(humans);
// html.getHtml();