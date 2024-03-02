// Домашнє завдання(Модуль №27. ES6)
// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

class Calculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  read() {
    this.a = +prompt("Введіть перше число:");
    this.b = +prompt("Введіть друге число:");
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

let calc = new Calculator();
calc.read();
console.log("Сумма:", calc.sum());
console.log("Множення:", calc.mul());

//---------------------------------------------------------------------------------------------//