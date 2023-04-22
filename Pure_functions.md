`Pure Functions`

- Pure functions are the function that return same result if the same arguments are passed.
- It doesn't depend on any state change or data change during the program's execution.It only depends on input arguments.
- Pure function also don't produce any observable side effects like data mutation or network request.

```
function calculateGST( productPrice ) {
    return productPrice * 0.05;
    }
    console.log(calculateGST(15))

```

- this is pure function as output doesn't get affected by any other state/value changes.

- Let's see one more example

```
var tax=10;
function calculateGST( productPrice){
return productPrice\*(tax/100)+productPrice;
}

console.log(calculateGST(15))
```

This is not pure function as it is dependent on external tax variable , if somehow someone chnges value of tax we will get different output even if we pass same argument productPrice to the function.

- If pure function calls pure function that is not side effect.

- Below are some side effects that function shouldn't do to be considered as pure.

1. Making HTTP request
2. Data mutation
3. Printing to console or screen
4. DOM query/manipulation
5. Math.random()
6. Getting the current time

`Object.setPrototypeOf()`

- The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

```
const obj = {};
  const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"
```
