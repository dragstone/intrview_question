`Object.setPrototypeOf()`
- The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.


- syntax
Object.setPrototypeOf(obj, prototype)



```
const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"


```


`Constructor pattern`
https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81


`instanceof`
- The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true

```