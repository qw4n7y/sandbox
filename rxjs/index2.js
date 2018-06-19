const Rx = require('rxjs');

function output(...arguments) {
  console.log(`> ${arguments}`);
}

const stream$ = Rx.of(1, 2, 3);

stream$.subscribe(output);

// Wanna check if the stream caches the values
setTimeout(() => {
  stream$.subscribe(output);
}, 1000);
