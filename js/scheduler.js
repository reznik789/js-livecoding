// Реализуй класс Scheduler,
// который управляет выполнением асинхронных задач
// с ограничением количества одновременно выполняемых задач.
class Scheduler {
  _limit = 0;
  _queue = [];
  _runningCount = 0;

  constructor(limit) {
    this._limit = limit;
    // limit - максимальное количество одновременно выполняемых задач
  }

  _runNext() {
    if (this._queue.length === 0 || this._runningCount >= this._limit) return;
    const [next, resolve, reject] = this._queue.shift();

    this._runningCount += 1;
    next()
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this._runningCount -= 1;
        this._runNext();
      });
  }
  // promiseCreator - функция, возвращающая Promise
  // возвращает Promise, который резолвится результатом задачи
  add(promiseCreator) {
    return new Promise((res, rej) => {
      this._queue.push([promiseCreator, res, rej]);
      this._runNext();
    });
  }
}

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler(2); // максимум 2 задачи параллельно

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// Вывод:
// (через 500ms) '2'
// (через 800ms - ещё 300ms после '2') '3'
// (через 1000ms) '1'
// (через 1200ms - ещё 400ms после '3') '4'
