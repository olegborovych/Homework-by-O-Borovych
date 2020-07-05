// 1.Создать страницу, которая выводит нумерованный список песен:

// let playList = [
//     {
//         author: "LED ZEPPELIN",
//         song: "STAIRWAY TO HEAVEN"
//     },
//     {
//         author: "QUEEN",
//         song: "BOHEMIAN RHAPSODY"
//     },
//     {
//         author: "LYNYRD SKYNYRD",
//         song: "FREE BIRD"
//     },
//     {
//         author: "DEEP PURPLE",
//         song: "SMOKE ON THE WATER"
//     },
//     {
//         author: "JIMI HENDRIX",
//         song: "ALL ALONG THE WATCHTOWER"
//     },
//     {
//         author: "AC/DC",
//         song: "BACK IN BLACK"
//     },
//     {
//         author: "QUEEN",
//         song: "WE WILL ROCK YOU"
//     },
//     {
//         author: "METALLICA",
//         song: "ENTER SANDMAN"
//     }
// ];

// const createTag = (tag) => document.createElement(tag);

// function createList() {
//     const ol = createTag("ol");

//     playList.forEach((track) => {
//         const li = createTag("li");
//         const h4 = createTag("h4");
//         const p = createTag("p");

//         h4.innerText = track.author;
//         p.innerText = track.song;

//         li.append(h4);
//         li.append(p);

//         ol.append(li);
//     });
//     document.body.append(ol);
// }

// createList();


/* 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
На модальном окне должен быть текст и кнопка "Закрыть".
Изначально модальное окно не отображается.
При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. */


// let box = document.querySelector(".box");
// let btnOpen = document.querySelector(".btn__open");
// let btnClose = document.querySelector(".btn__close");

// btnOpen.onclick = function () {
//     box.style.display = "flex";
// };

// btnClose.onclick = function () {
//     box.style.display = "none";
// };

/* 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет. */

