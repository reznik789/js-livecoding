async function resolveAfterOneSecond(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Промис выполнен через 1 секунду! Результат: ${x + 1}`);
    }, 1000); // 1000 мс = 1 секунда
  });
}

const timeLimited =
  (asynFunc, timeLimit) =>
  (...args) => {
    return Promise.race([
      asynFunc(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject("Time exited"), timeLimit)
      ),
    ]);
  };

const tm1 = timeLimited(resolveAfterOneSecond, 500);
const tm2 = timeLimited(resolveAfterOneSecond, 1500);

tm1(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
tm2(45)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
