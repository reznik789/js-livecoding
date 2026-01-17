/**
 * @param {Object} context - контекст для привязки
 * @param {...any} boundArgs - аргументы для частичного применения
 * @return {Function}
 */
Function.prototype.myBind = function (context, ...boundArgs) {
  return (...args) => {
    return this.apply(context, [...boundArgs, ...args]);
  };
};

// Пример 1: привязка контекста
const obj = { value: 42 };
function getValue() {
  return this.value;
}
const boundGetValue = getValue.myBind(obj);
console.log(boundGetValue()); // 42

// Пример 2: частичное применение
function sum(a, b, c) {
  return a + b + c;
}
const sumWith5 = sum.myBind(null, 5);
console.log(sumWith5(10, 15)); // 30

// Пример 3: и контекст, и аргументы
const user = { name: "Alice" };
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const greetAlice = greet.myBind(user, "Hello");
console.log(greetAlice("!")); // "Hello, Alice!"
