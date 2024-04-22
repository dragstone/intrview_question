// Implement JSON.stringify from scratch

function stringify(value) {
  if (typeof value === "undefined" || typeof value === "function") {
    return undefined;
  } else if (value === null) {
    return "null";
  } else if (typeof value === "string") {
    return `"${value}"`;
  } else if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  } else if (Array.isArray(value)) {
    return `[${value.map((item) => stringify(item)).join(",")}]`;
  } else if (typeof value === "object") {
    const keyValuePairs = [];
    for (let key in value) {
      const keyString = stringify(key);
      const valueString = stringify(value[key]);
      if (keyString !== undefined && valueString !== undefined) {
        keyValuePairs.push(`${keyString}:${valueString}`);
      }
    }
    return `{${keyValuePairs.join(",")}}`;
  } else {
    return undefined;
  }
}

const obj = {
  a: 1,
  b: "test",
  c: {
    x: 1,
    y: 3,
    z: { a: 1, b: "hello", nestedKey: ["mango", "apple", 1], p: undefined },
  },
};
console.log(JSON.stringify(obj));
const result = stringify(obj);
console.log(result);

//   output

// {"a":1,"b":"test","c":{"x":1,"y":3,"z":{"a":1,"b":"hello","nestedKey":["mango","apple",1]}}}
// {"a":1,"b":"test","c":{"x":1,"y":3,"z":{"a":1,"b":"hello","nestedKey":["mango","apple",1]}}}
