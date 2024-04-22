// Implement Object equality from scratch

function areobjectsEqual(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !isValueEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

function isValueEqual(value1, value2) {
  if (typeof value1 === "object" && typeof value2 === "object") {
    return areobjectsEqual(value1, value2);
  } else {
    return value1 === value2;
  }
}

const obj1 = { a: 1, b: 2, c: { d: 3, e: { x: "hello", y: 5 } } };
const obj2 = { a: 1, b: 2, c: { d: 3, e: { x: "hello", y: 5 } } };
const obj3 = { a: 1, b: 2, c: { d: 4 } };

console.log(areobjectsEqual(obj1, obj2));
console.log(areobjectsEqual(obj1, obj3));

//   output
// true
// false
