class EventEmitter {
  #subscribers = new Map();

  subscribe(eventName, callback) {
    if (!this.#subscribers.has(eventName)) {
      this.#subscribers.set(eventName, []);
    }
    this.#subscribers.get(eventName).push(callback);
    function release() {
      const subscribers = this.#subscribers.get(eventName);
      this.#subscribers.set(
        eventName,
        subscribers.filter((clb) => clb !== callback)
      );
    }
    return {
      release: release.bind(this),
    };
  }

  emit(eventName, ...params) {
    const subscribers = this.#subscribers.get(eventName);
    subscribers?.forEach((callback) => callback(...params));
  }
}

const emitter = new EventEmitter();

const sub1 = emitter.subscribe("event1", callback1);
const sub2 = emitter.subscribe("event2", callback2);
const sub3 = emitter.subscribe("event2", callback3);

emitter.emit("event1", 1, 2);
emitter.emit("event2", 3, 4);

// В консоль выведется:
// 3 event1
// 12 event2
// 81 event3

sub1.release();
sub2.release();

function callback1(x, y) {
  console.log(x + y, "event1");
}

function callback2(x, y) {
  console.log(x * y, "event2");
}

function callback3(x, y) {
  console.log(x ** y, "event3");
}
