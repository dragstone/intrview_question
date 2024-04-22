// Implement Object concatination

function concatObjects(obj1, obj2) {
  const result = {};
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        result[key] = concatObjects(obj1[key], obj2[key]);
      } else if (obj2[key] !== undefined) {
        result[key] = obj2[key];
      } else {
        result[key] = obj1[key];
      }
    }
  }

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key) && obj1[key] === undefined) {
      result[key] = obj2[key];
    }
  }
  return result;
}

const obj1 = { a: { b: 1 }, c: 2 };
const obj2 = { a: { d: 3 }, e: 4, x: { a: 9, b: 8 } };

console.log(Object.assign({}, obj1, obj2));
const result = concatObjects(obj1, obj2);
console.log(result);

// output
// { a: { d: 3 }, c: 2, e: 4, x: { a: 9, b: 8 } }
// { a: { b: 1, d: 3 }, c: 2, e: 4, x: { a: 9, b: 8 } }
