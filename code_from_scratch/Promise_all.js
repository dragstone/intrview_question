//  Implement Promise.all from Scratch

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let counter = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          results[i] = res;
          counter++;
          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
}

const p1 = Promise.resolve(2);
const p2 = 34;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hello");
});

promiseAll([p1, p2, p3]).then((res) => console.log(res));
