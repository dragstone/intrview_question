//Method 1
var arr = [1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 6, 9];

var newarr = arr.filter((x, y) => arr.indexOf(x) == y);
// x is value
// y is index
console.log(newarr);

//Method 2
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]); // [2, 3, 4, 5, 6, 7, 32]
