// @flow

// Simple
//
function sum(a: number, b: number): number {
  return a + b;
}
console.log('SUM(1, 2) =', sum(1, 2));

// Array type
//
function sum2(...summands: Array<number>): number {
  return summands.reduce((a, i) => a + i, 0);
}
console.log('SUM2(1, 2) =', sum2(1, 2));

// Type definition, indexer property
//
type AMap = { [string]: string };
function exclame(map: AMap): AMap {
  return Object.keys(map).reduce((acc, key) => {
    acc[key] = `${map[key]}!`;
    return acc;
  }, {});
}
console.log('exclame({foo: \'bar\'}) =', exclame({'foo': 'bar'}));

// Interfaces
//
interface IRobot {
  getID(): string;
}
const robot: IRobot = { getID() { return '123'; } };
console.log('robot.getID() =', robot.getID());

// Generics
//
function lazyEvaluate<T>(arg: T): () => T {
  return function() {
    return arg;
  }
}
const lazyEvaluated = lazyEvaluate(2);
console.log('lazyEvaluated, lazyEvaluated() =', lazyEvaluated, lazyEvaluated());

//  Type Union
//
type Success = { success: true, value: any };
type Failed = { success: false, error: string };
function doSomeWork(arg: number): Success | Failed {
  if (arg < 10) {
    return { success: true, value: arg };
  } else {
    return { success: false, error: 'smth went wrong' };
  }
}
console.log('doSomeWork(9) =', doSomeWork(9));
console.log('doSomeWork(13) =', doSomeWork(13));