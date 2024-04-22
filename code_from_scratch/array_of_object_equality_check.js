function isObjectEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);

  console.log(arr1, arr2);

  for (i = 0; i < arr1.length; i++) {
    if (!objectEquality(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
}

function objectEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, name: "Alice" },
  { id: 1, name: "John" },
];
const array3 = [
  { id: 1, name: "John" },
  { id: 3, name: "Bob" },
];

console.log(isObjectEqual(array1, array2));
