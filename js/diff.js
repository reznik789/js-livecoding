// ------------------------------------------------------------
// Задача: Напишите функцию, удаляет одинаковые подряд идущие символы.
// ------------------------------------------------------------

function deleteDuplicate(str) {
  // let res = "";
  // for (i of str) {
  //   if (i === res[res.length - 1]) continue;
  //   else res += i;
  // }
  // return res;
  // 2ой способ
  // const arrStr = str.split("");
  // return arrStr.filter((item, index, arr) => item !== arr[index + 1]);
}

// console.log(deleteDuplicate("aaaabbbbbccccddddbbb")); // abcdb

// ------------------------------------------------------------
// напишите функцию, которая проверяет что число является палиндромом(зеркальное)
// ------------------------------------------------------------

function isPalindrome(num) {
  // return String(num) === String(num).split("").reverse().join("");
}

// console.log(
//   isPalindrome(121),
//   isPalindrome(-121),
//   isPalindrome(10),
//   isPalindrome(1221),
// ); // true, false, false, true

// ------------------------------------------------------------
// напишите функцию, которая проверяет что 2 слова являются анаграммами.Анаграмма — это слово или фраза,
// образованная путем перестановки букв другого слова или фразы, обычно с использованием всех исходных букв ровно один раз.
// ------------------------------------------------------------

function isAnagram(s, t) {}
// console.log(isAnagram("rat", "car"), isAnagram("каприза", "приказа")); // false, true

// ------------------------------------------------------------
// Задача: Напишите функцию, которая вычисляет факториал заданного числа.
// ------------------------------------------------------------

function factorial(n) {}

// console.log(factorial(5)); // = 1*2*3*4*5 = 120

// ------------------------------------------------------------
// Задача: Напишите функцию calculateAverageAge, которая принимает на вход массив объектов,
// представляющих людей, и возвращает средний возраст всех людей.
// ------------------------------------------------------------

function calculateAverageAge(people) {}

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// console.log(calculateAverageAge(people)); // 30

// ------------------------------------------------------------
// Задача: Напишите функцию, которая принимает на вход два массива и возвращает новый массив,
// содержащий только общие элементы двух массивов.
// ------------------------------------------------------------

function findCommonElements(arr1, arr2) {}

// console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// ------------------------------------------------------------
// Задача: Напишите функцию, которая принимает на вход массив чисел и возвращает сумму всех положительных элементов массива.
// ------------------------------------------------------------

function sumPositiveNumbers(arr) {}

// console.log(sumPositiveNumbers([1, -2, 3, -4, 5])); // 9

// ------------------------------------------------------------
// Задача: Напишите функцию, которая принимает на вход  2 строки и возвращает объект, содержащий количество вхождений каждого символа в строке.
// ------------------------------------------------------------

function countCharacters(str) {}

// console.log(countCharacters("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// ------------------------------------------------------------
//  Задача: Напишите функцию, которая принимает на вход массив объектов и сортирует его по заданному свойству.
// ------------------------------------------------------------

function sortByProperty(arr, property) {}

// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 18 },
//   { name: "Charlie", age: 22 },
// ];

// console.log(sortByProperty(students, "age"));
/* Output:
   [
     { name: 'Bob', age: 18 },
     { name: 'Alice', age: 20 },
     { name: 'Charlie', age: 22 }
   ]
   */

// ------------------------------------------------------------
// Задача: Реализовать кастомную функцию кариррования.
// Кариррованая версия функции должна принимать любое количество аргументов, смотри пример
// ------------------------------------------------------------
//
function addThreeNums(a, b, c) {
  return a + b + c;
}

function curry(func) {}

// const addThreeNumsCurr = curry(addThreeNums);
// console.log(addThreeNumsCurr(1)(2)(3)) // 6
// console.log(addThreeNumsCurr(1, 2, 5)) // 8

// ------------------------------------------------------------
// Задача: Реализовать кастомную функцию кариррования с возратом после вызова без аргументов, смотри пример
// ------------------------------------------------------------
//
function curry2(func) {}

// const addThreeNumsCurr2 = curry2(addThreeNums);

// console.log(addThreeNumsCurr2(1)(2)(7)()) //10
// console.log(addThreeNumsCurr2(1, 2, 9)()) //12

// ------------------------------------------------------------
// Задача: Реализовать кастомную функцию частичного применения
// ------------------------------------------------------------
//
function partial(func, ...params) {}

// const addThreeToNum = partial(addThreeNums, 1, 2);

// console.log(addThreeToNum(1)) // 4
// console.log(addThreeToNum(5)) // 8

// ------------------------------------------------------------
// Задача: проанализирвать код без предварительного выполнения
// В результате выполенения мы хотим увидеть массив только с одним пользователем статус которого равен currentFilter
// Будет ли код работать ожидаемым образом, если нет то почему, что нужно изменить?
// ------------------------------------------------------------

// const user = {
//   currentFilter: 'active',
//   store: [
//     {name: 'Alex', status: 'active'},
//     {name: 'Vasya', status: 'not active'}
//   ],
//   filter: function() {
//     return store.filter(function(item) {
//       return item.status === this.currentFilter;
//     })
//   }
// }
// console.log(user.filter())

// ------------------------------------------------------------
// Задача: Написать функцию доступную как метод массива, которая уберет все дубликаты из массива
// ------------------------------------------------------------

// const arr = [1, 2, 3, 4, 3, 4]
// console.log(arr.removeDuplicates()) // [1, 2, 3, 4]

// ------------------------------------------------------------
// Задача: Указать последовательность console.log и объяснить.
// ------------------------------------------------------------

// setTimeout(()=>{
//     console.log(1),
//     0
// });

// Promise.resolve().then(()=>{
//     console.log(2)
// });

// new Promise((resolve, reject) => {
//     console.log(3),
//     resolve();
// }).then(()=>{
//     console.log(4)
// });
// console.log(5);

// ------------------------------------------------------------
// Задача: написать функцию delay что бы она работала ожидаемым образом, см. пример исползования.
// ------------------------------------------------------------
function delay(ms) {}

// const start = Number(new Date())
// delay(100).then(() => {
//     console.log(Number(new Date()) - start) // >= 100
// })

// ------------------------------------------------------------
// Задача: Нужно написать функцию, которая принимает число N и возвращает функцию, которой первые N раз возвращает 'yes', а потом – 'no'.
// ------------------------------------------------------------
function canGetCount(n) {
  // code here
}
// const getOne = canGetCount(2);
// getOne() === 'yes' // true
// getOne() === 'yes' // true
// getOne() === 'no' // true

// ------------------------------------------------------------
// Задача: Написать свою реализацию Promise.all
// ------------------------------------------------------------
//
function promiseAll(promises) {}

// ------------------------------------------------------------
// Задача: Написать свою функцию мемоизации. Мемоизированная функция — это функция,
// которая не будет вызвана повторно с одинаковыми аргументами, а вернет кэшированное значение.
// fn может быть любой функцией и принимать значения любого типа.
// Аргументы считаются идентичными, если они ===
// ------------------------------------------------------------
//
function memoize(fn) {}

// ------------------------------------------------------------
// Задача: Написать реализацию для makeFormValidatorFactory,
//  что бы она удовлетворяла апи предсталенному ниже
// ------------------------------------------------------------
//

// const createFormValidator = makeFormValidatorFactory({
//   required: (value) => {
//     if (value === "") {
//       return "Required";
//     }
//   },
//   minLength: (value) => {
//     if (value.length < 5) {
//       return "Minimum length is 5";
//     }
//   },
//   email: (value) => {
//     if (!value.includes("@")) {
//       return "Invalid email";
//     }
//   },
// });

// const validateUser = createFormValidator({
//   id: ["required"],
//   username: ["required", "minLength"],
//   email: ["required", "email"],
// });

// const errors = validateUser({
//   id: "1", // Валиден так как указан
//   username: "john", // Не валиден по условию minLength
//   email: "Blah", // Не валиден по условию email
// });

// console.log(errors); // { username: 'Minimum length is 5', email: 'Invalid email' }

// ------------------------------------------------------------
// Задача: Написать функцию getPrivileges которая примет объект типа data
// и имейл и вернет список привилеий которымы обладает пользователь с данным email
// console.log("Привилегии пользователя: ", getPrivileges(data, "aaaa@gmail.com")); // E ["read", "write"]
// ------------------------------------------------------------
//
// const data = {
//   read: ["aaaa@gmail.com", "rbbbb@gmail.com", "cccc@gmail. com"],
//   write: ["aaaa@gmail.com", "ddd@gmail.com", "okk@gmail.com"],
// };

// function getPrivileges(obj, email) {}

// const items = [
//   { price: 1500, weight: 1 },
//   { price: 2000, weight: 1 },
//   { price: 3000, weight: 4 },
//   { price: 2000, weight: 3 },
// ];

// const CAPACITY = 4;

// function findMaxCost(items, maxCapacity) {
//   const data = [];
//   for (let itemInd = 0; itemInd < items.length; itemInd += 1) {
//     for (let currCap = 0; currCap <= maxCapacity; currCap += 1) {
//       // 0 0
//       if (!Array.isArray(data[itemInd])) {
//         data[itemInd] = [0];
//       }
//       const currItem = items[itemInd];
//       if (!currItem) continue;
//       if (currItem.weight > currCap) {
//         data[itemInd][currCap] = data[itemInd - 1]?.[currCap] ?? 0;
//         // console.log(data[itemInd][currCap]);
//       } else {
//         data[itemInd][currCap] = Math.max(
//           data[itemInd - 1]?.[currCap] ?? 0,
//           currItem.price + (data[itemInd - 1]?.[currCap - currItem.weight] ?? 0)
//         );
//       }
//     }
//   }
//   console.log(data);
//   console.log("Максимальная стоимость: ", data[items.length - 1][maxCapacity]);
// }

// findMaxCost(items, CAPACITY);
