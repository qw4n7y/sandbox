const Rx = require('rxjs');
const RxOperators = require('rxjs/operators');

function output(...arguments) {
  console.log(`> ${arguments}`);
}

// From docs:
// An ES2015 compliant promise which contains the last value from the Observable sequence.
// If the Observable sequence is in error, then the Promise will be in the rejected stage.
// If the sequence is empty, the Promise will not resolve.
//
function observableToPromise(observable, onNext) {
  return new Promise((resolve, reject) => {
    const observer = {
      next: onNext,
      error: error => reject(error),
      complete: () => resolve()
    };

    observable.subscribe(observer);
  })
}

async function main() {
  output(`Let's do some simple first`);
  await observableToPromise(
    Rx.interval(300).
      pipe(
        RxOperators.take(4)
      ),
    output);

  output(`Let's write each of the collection items by interval`);
  const collection = ['hello', 'world', 'you', 'are', 'amazing', '!'];
  await observableToPromise(
    Rx.from(collection).pipe(
      RxOperators.zip(Rx.interval(300)),
      RxOperators.map(value => value[0])
    ),
    output);
}

main().then(() => output('OK'));