//Домашнє завдання

// -- 1 --

// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// let fruts = ["Apple", "Tomat", "Cherry", "Orange"];
// console.log(fruts);

//---------------------------------------------------------------------------------------------//

// -- 2 --

//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//---------------------------------------------------------------------------------------------//
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//---------------------------------------------------------------------------------------------//
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number;
// do {
//   number = prompt("Будь ласка, введіть число більше за 100:");
//   if (number === null || number === "") {
//     break;
//   }
//   number = Number(number);
// } while (number <= 100);
// if (number > 100) {
//   alert("Дякуємо! Ви ввели число більше за 100.");
// } else {
//   alert("Ви скасували ввід або ввели недопустиме значення.");
// }

//---------------------------------------------------------------------------------------------//
// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let sum = 0;
// for (let i = 0; i < girls.length; i++) {
//   sum += girls[i].age;
// }
// let averageAge = sum / girls.length;
// console.log(averageAge);
//---------------------------------------------------------------------------------------------//

//Домашнє завдання

// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

//Використовуючи оператор '?':
// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

//Використовуючи оператор АБО '||':
// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

//---------------------------------------------------------------------------------------------//
// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a < b) {
//     console.log(a);
//     return;
//   } else {
//       console.log(b);
//       return;
//   }
// }

//---------------------------------------------------------------------------------------------//
// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );

//---------------------------------------------------------------------------------------------//
// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   Info: function () {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${this.missedClasses}`);
//   },
// };

// const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// const displayStudent1Info = student.Info.bind(student1);
// displayStudent1Info();
// const displayStudent2Info = student.Info.bind(student2);
// displayStudent2Info();
// const displayStudent3Info = student.Info.bind(student3);
// displayStudent3Info();

// const infoStudent = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   logInfo: function (missedClasses) {
//     console.group(`info:`);
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${missedClasses}`);
//     console.groupEnd();
//   },
// };

// const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// infoStudent.logInfo.call(student1, "2");
// infoStudent.logInfo.call(student2, "1");
// infoStudent.logInfo.call(student3, "3");

// const infoStudent = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   logInfo: function (averageGrade,missedClasses) {
//     console.group(`students info:`);
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${averageGrade}`);
//     console.log(`Кількість пропущених занять: ${missedClasses}`);
//     console.groupEnd();
//   },
// };

//  const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// infoStudent.logInfo.apply(student1,[4.5, 2])
// infoStudent.logInfo.apply(student2,[4.0, 1])
// infoStudent.logInfo.apply(student3,[4.2, 3])
//---------------------------------------------------------------------------------------------//
// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// function html() {
//   console.log("За допомогою HTML ви можете створити свій власний веб-сайт.");
//   console.log(this);
// }
// document.querySelector("#html").onclick = html;
// // при натисканні на кнопку css - має видати коротке визначення що це таке
// function css() {
//   console.log("Каскадні таблиці стилів (CSS)");
//   console.log(this);
// }
// document.querySelector("#css").onclick = css;
// const button = {
//   function() {
//     console.log("визначення: ", this.items);
//   },
// };
// const css = {
//   items: "Каскадні таблиці стилів,допоможуть Вам прикрасити сторінку",
// };
// const html = {
//   items: "За допомогою HTML ви можете створити свій власний веб-сайт.",
// };

// document
//   .querySelector("#css")
//   .addEventListener("click", button.function.bind(css));
// document
//   .querySelector("#html")
//   .addEventListener("click", button.function.bind(html));
//---------------------------------------------------------------------------------------------//
// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function Shop() {
//     let totalPrice = 0;

//     return function(product, pricePerKg, quantity) {
//         let cost = pricePerKg * quantity;
//         totalPrice += cost;
//         return product + ": ₴ " + cost;
//     }
// }

// const shop = Shop();

// console.log(shop("Apple", 2, 3)); // Apple: $6
// console.log(shop("Banana", 1.5, 2)); // Banana: $3
// console.log(shop("Cherry", 4, 1.5)); // Cherry: $6
// console.log(shop("pear", 9, 3.5)); // pear: $31.5

//---------------------------------------------------------------------------------------------//
// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }

//   setNumber = (number) => {
//     this.number = number;
//   };

//   getInfo = () => `Name: ${this.name}, Number: ${this.number}`;
// }

// const user1 = new Abonent("Ivan", "193-446-0090");
// const user2 = new Abonent("Alex", "937-654-3010");
// const user3 = new Abonent("Mark", "565-993-7767");

// console.log(user1.getInfo());
// console.log(user2.getInfo());
// console.log(user3.getInfo());
//---------------------------------------------------------------------------------------------//
