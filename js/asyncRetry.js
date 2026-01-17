/**
 * @param {Function} asyncFn - асинхронная функция, которую нужно повторять
 * @param {number} maxRetries - максимальное количество повторных попыток
 * @return {Promise}
 */
async function retry(asyncFn, maxRetries) {
  return new Promise((res, rej) => {
    let counter = 0;
    async function caller() {
      try {
        const result = await asyncFn();
        res(result);
      } catch (e) {
        counter++;
        if (counter > maxRetries) rej(e);
        else caller();
      }
    }
    caller();
  });
}

// Пример 1: успех со второй попытки
let attempt = 0;
const unreliableFunction = async () => {
  attempt++;
  if (attempt < 2) {
    throw new Error("Failed");
  }
  return "Success";
};

retry(unreliableFunction, 3).then((result) => {
  console.log(result); // 'Success'
  console.log(attempt); // 2
});

// Пример 2: все попытки неудачны
const alwaysFails = async () => {
  throw new Error("Always fails");
};

retry(alwaysFails, 3).catch((error) => {
  console.log(error.message); // 'Always fails'
});

// Пример 3: успех с первой попытки
const alwaysSucceeds = async () => "OK";

retry(alwaysSucceeds, 3).then((result) => {
  console.log(result); // 'OK'
});
