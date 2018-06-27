const Rx = require('rxjs')
const RxOp = require('rxjs/operators')

const $ = Rx.
            defer(() => {
              console.log('Attempt')
              const promise = Promise.reject(43)
              return Rx.from(promise)
            }).
            pipe(
              RxOp.retryWhen(error$ => {
                return error$.pipe(
                  RxOp.scan((retries, error) => {
                    if (retries >= 2) {
                      throw error
                    } else {
                      return retries + 1
                    }
                  }, 0),
                  RxOp.delay(1000),
                )
              })
            )

$.subscribe(
  x => console.log(`Final Result: ${x}`),
  e => console.log(`Final Error: ${e}`),
  () => console.log(`Final OK`),
)