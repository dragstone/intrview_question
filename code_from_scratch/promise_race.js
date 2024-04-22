function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "err");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "hi");
});

Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// resolve reject

function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  } else {
    return new Promise((resolve, reject) => resolve(value));
  }
}

function promiseReject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}

const p1 = promiseResolve(new Promise((resolve, reject) => resolve("j")));
p1.then((res) => console.log(res)); // "Success"
const p2 = promiseReject("No");
p2.then(
  (_) => {},
  (err) => console.log(err)
); // "No"
