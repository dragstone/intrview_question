function reverseInPlace(str) {
  const words = str.split(" ");
  let result = "";
  for (i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return result;
}
console.log(reverseInPlace("abd fhe kdj"));

function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return result;
}
console.log(reverseInPlace("abd fhe8   kdj9"));

//   output
//   dba 8ehf 9jdk
