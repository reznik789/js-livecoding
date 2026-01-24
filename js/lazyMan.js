class LazyMan {
  constructor(name) {
    console.log(`Hi i'm ${name}`);
    setTimeout(this._handleQueue.bind(this), 0);
  }

  _queue = [];
  async _handleQueue() {
    for (let promiseFn of this._queue) {
      await promiseFn();
    }
  }

  _logTextWithTimeout(text, seconds) {
    return new Promise((res) =>
      setTimeout(() => {
        console.log(text);
        res();
      }, seconds * 1000)
    );
  }

  sleep(seconds) {
    this._queue.push(() =>
      this._logTextWithTimeout(`Wake up after ${seconds}`, seconds)
    );
    return this;
  }

  eat(food) {
    this._queue.push(() => this._logTextWithTimeout(`Eat ${food}`, 0));
    return this;
  }

  sleepFirst(seconds) {
    this._queue.unshift(() =>
      this._logTextWithTimeout(`Wake up after ${seconds}`, seconds)
    );
    return this;
  }
}
// Пример 1:
// new LazyMan('Tom');
// Вывод (сразу):
// Hi, I'm Tom

// Пример 2:
// new LazyMan("Tom").sleep(3).eat("dinner");
// Вывод:
// Hi, I'm Tom
// (через 3 сек) Wake up after 3
// Eat dinner

// Пример 3:
// new LazyMan("Tom").eat("breakfast").sleep(2).eat("dinner");
// Вывод:
// Hi, I'm Tom
// Eat breakfast
// (через 2 сек) Wake up after 2
// Eat dinner

// Пример 4: sleepFirst имеет наивысший приоритет!
new LazyMan("Tom").eat("breakfast").sleepFirst(5).eat("dinner");
// Вывод:
// Hi, I'm Tom
// (через 5 сек) Wake up after 5
// Eat breakfast
// Eat dinner

// Пример 5:
// new LazyMan("Alice").sleepFirst(2).sleep(1).eat("lunch").sleep(1).eat("dinner");
// Вывод:
// Hi, I'm Alice
// (через 2 сек) Wake up after 2
// (через 1 сек) Wake up after 1
// Eat lunch
// (через 1 сек) Wake up after 1
// Eat dinner
