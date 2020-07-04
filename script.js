// 1

// let car = {
//     mark: 'Lada',
//     model: '2170',
//     year: '2007',
//     speed: 120,
// }

// todo інфо про автомобіль

// function info(obj) {
//     for (let i in obj) {
//         document.write(`${i}: ${obj[i]}<br>`);
//     }
// }

// info(car);

// //todo розрахунок часу з середньою швидкістю.

// function timeSpeed(distance) {
//     let time = (distance / this.speed);
//     let finishTime = Math.floor(time / 4);
//     return time + finishTime;
// }

// console.log({ timeSpeed });


// 3 . Функция вывода времени на экран;

let time = {
    hour: 2,
    minute: 13,
    second: 33,
};

function showDate(obj) {
    for (let i in obj) {
        document.write(`${i}:<h1>${obj[i]}</h1>`);
    }
}
showDate(time);

// todo Функция изменения времени на переданное количество секунд;



// todo Функция изменения времени на переданное количество минут;



//todo Функция изменения времени на переданное количество часов. 


