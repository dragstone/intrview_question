https://semaphoreci.com/blog/microfrontends#:~:text=Microfrontends%20are%20what%20we%20get,create%20a%20consistent%20user%20experience.

https://medium.com/@mike_wong/what-is-memoization-in-javascript-5c6cdef49ad2

https://medium.com/@keshavs642/introduction-to-javascript-mixins-9667ce3de3e0

https://javascript.info/mixins

https://medium.com/swlh/currying-in-javascript-6e146fb455a8#:~:text=Currying%20is%20a%20process%20in%20functional%20programming%20in%20which%20we,next%20argument%2C%20and%20so%20on.

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function

curry(8)(7)(2)

https://www.geeksforgeeks.org/what-is-event-propagation-capturing-bubbling/

https://www.tutorialsteacher.com/javascript/prototype-in-javascript

https://www.programiz.com/javascript/inheritance

https://www.geeksforgeeks.org/reactjs-finddomnode-method/

https://www.youtube.com/watch?v=XI7zep97c-Y

https://formidable.com/blog/2021/react-composition/

https://www.smashingmagazine.com/2020/06/higher-order-components-react/

https://blog.logrocket.com/moving-from-scss-to-styled-components-advantages-and-caveats/

https://www.youtube.com/watch?v=m_mtV4YaI8c

https://www.codementor.io/blog/react-optimization-5wiwjnf9hj

https://blog.logrocket.com/react-design-patterns/

https://www.geeksforgeeks.org/what-are-the-advantages-of-using-redux-with-reactjs/

https://fintelics.medium.com/technical-benefits-of-using-redux-f7d345e7cc9c

Redux-saga generators

https://www.geeksforgeeks.org/arrow-functions-in-javascript/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

https://medium.com/0xcode/embedded-expressions-using-template-literals-in-js-95d5d5bd4f57

`Javascript classes`

- A JS class is blueprint for creating objects.
- A class encapsulate data and function that manipulate data.
- JS classes are syntatic sugar over prototypal inheritance.
- ES6 classes are just special functions.

```
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
```

`ES6 class declaration`

class Person {
constructor(name) {
this.name = name;
}
getName() {
return this.name;
}
}
let john = new Person("John Doe");

let name = john.getName();
console.log(name); // "John Doe"

- To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.

console.log(typeof Person); // function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

- A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.

- class declarations are not hoisted like function declarations.

For example, if you place the following code above the Person class declaration section, you will get a ReferenceError.

let john = new Person("John Doe");
Code language: JavaScript (javascript)
Error:

Uncaught ReferenceError: Person is not defined

https://smithspencer817.medium.com/understanding-modules-in-node-js-ecac051e0f4
