// Домашнє завдання (Модуль №28 DOM)
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

// let element = document.querySelector("[data-widget-name]");
// let widgetName = element.getAttribute("data-widget-name");
// console.log(widgetName);

//---------------------------------------------------------------------------------------------//

// Домашнє завдання (Модуль №29 Події)

// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// document.querySelector("button").addEventListener("click", function () {
//   document.getElementById("text").style.display = "none";
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   button.style.display = "none";
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// document.addEventListener("DOMContentLoaded", function () {
//   const parents = document.querySelectorAll(".parent");

//   parents.forEach((parent) => {
//     parent.addEventListener("click", function () {
//       const children = this.querySelector(".child");
//       children.style.display =
//         children.style.display === "none" ? "block" : "none";
//     });
//   });
// });

//---------------------------------------------------------------------------------------------//
