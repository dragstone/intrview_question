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

https://dev.to/shingaiz/detailed-explanation-of-javascript-prototype-chain-prototype-1392

https://www.scaler.com/topics/javascript/prototype-inheritance-in-javascript/

Prototype chaining is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in JavaScript and is used extensively in libraries and frameworks.
Every object in JavaScript has a prototype, which is another object. When a property or method is not found on an object, JavaScript will look for it on the object's prototype, and so on, until the property or method is found or the end of the prototype chain is reached.
The prototype chain is created when an object is created. The prototype of an object is set to the constructor function that was used to create the object. For example, the following code creates an object called myObject using the Object constructor function:
const myObject = new Object();
Use code with caution.
Learn more
The prototype of myObject is the Object prototype object. The Object prototype object has a number of properties and methods, such as toString() and valueOf().
If we try to access a property or method on myObject that does not exist on myObject itself, JavaScript will look for the property or method on the Object prototype object. For example, the following code will return the string "object":
console.log(myObject.toString());
Use code with caution.
Learn more
This is because the toString() method does not exist on myObject itself, but it does exist on the Object prototype object.
We can also add properties and methods to the prototype of an object. This will make the properties and methods available to all objects that are created using the constructor function. For example, the following code adds a greet() method to the Object prototype object:
Object.prototype.greet = function() {
console.log("Hello!");
};
Use code with caution.
Learn more
Now, all objects that are created using the Object constructor function will have the greet() method. For example, the following code will print "Hello!" to the console:
const myObject = new Object();
myObject.greet();
Use code with caution.
Learn more
Prototype chaining is a powerful mechanism that allows us to share properties and methods between objects. It is one of the key features that makes JavaScript so flexible and expressive.
