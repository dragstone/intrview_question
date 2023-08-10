`Property Descriptors`

- Property descriptors holds the configurations of object's property.

- When ever we create a JS object,whether using object literal syntax or some other means and add some properties to it, each propety(key) gets default property descriptor.

- Property descriptor is simple JS object associated with each property of object that contains information about that property such as its value and other meta data.

- To access the property descriptor of property, we need to use static method provided by object.
  The Object.getOwnPropertyDescriptor(obj,property)

- Own here means that it will return the property descriptor of property only if that property belongs to the object and not on its prototype chain.If the property doesn't exist on obj it returns undefined.

```
const user={
    name:"asmiriti",
    age:8
}

console.log(Object.getOwnPropertyDescriptor(user,"name"))

output
{
  value: 'asmiriti',
  writable: true,
  enumerable: true,
  configurable: true
}

```

- The value property of property descriptor is current value of obj property.
- Writable is whether user can assign new value to the property.
- enumerable is whether this property will show up in enumeratios like for in for of or Object.keys etc.
- configurable property tells whether user has permission to change property descriptor such as to change the value of writable enumerable settings.

- To create a new property or update existing property with a custom descriptor , we use Object.defineProperty.

- Lets modify an existing property name with writable set to false which disables writes to user.name

```
const user={
    name:"asmiriti",
    age:8
}

Object.defineProperty(user,"name",{
    writable:false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"))

user.name="hello";
console.log(user);,


output
{
  value: 'asmiriti',
  writable: false,
  enumerable: true,
  configurable: true
}
{ name: 'asmiriti', age: 8 }

```

- Here we changed the property descriptor writable to false , so if now we will try to change the user.name it will not change.

- Now let's make enumerable descriptor to false.

```
const user={
    name:"asmiriti",
    age:8
}

Object.defineProperty(user,"name",{
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"))

console.log(Object.keys(user));

output
{
  value: 'asmiriti',
  writable: true,
  enumerable: false,
  configurable: true
}
[ 'age' ]

```

- Now let's make configurable descriptor to false.

```
const user={
    name:"asmiriti",
    age:8
}

Object.defineProperty(user,"name",{
    configurable:false,
    writable:false
})




Object.defineProperty(user,"name",{
    writable:true
})
user.name="hello";
console.log(Object.getOwnPropertyDescriptor(user,"name"))
console.log(user.name);


output
Object.defineProperty(user,"name",{
       ^

TypeError: Cannot redefine property: name

```

- By setting configurable descriptor key to false, we lost the ability to change descriptor of our property name. This is very helpful if you don’t want your users to manipulate the recommended behavior of an object.

- You can create and/or update multiple properties at once using Object.defineProperties which takes two arguments.

```
let user={}

Object.defineProperties(user,{
    name:{
        value:"asmiriti",
        writable:false,
        enumerable:true,
        configurable:false
    },
    age:{
        value:8,
        writable:false,
        enumerable:true,
        configurable:false
    },
})

```

- getter and setter are functions in accessor
- get (getter) and set (setter) for a property can also be set in property descriptor with these exact keys. But when you define a getter, it comes with some sacrifices. You can not have an initial value or value key on the descriptor at all because the getter will return the value of that property. You can not use writable key on descriptor as well, because your writes are done through the setter and you can prevent writes there.

```
const user={
    name:"asmiriti",
    age:8
}

Object.defineProperty(user,"class",{
    configurable:true,
    enumerable:true,
    get:()=>this.value,
    set:(_val)=>{
        this.value= _val+' standard'
    },

})



console.log(Object.getOwnPropertyDescriptor(user,"class"))
console.log(user.class);
user.class="10";
console.log(user.class);


output
{
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
undefined
10 standard

```

`Object.freeze()`

- The Object.freeze() static method freezes an object.
- Freezing an object prevents extension and make existing properties non-writable and non-configurable.
- A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerality, configurality , writability, value cannot be changed, the object prototype cannot be reassigned.
- freeze returns same object that was passed in.

```
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42

```

`Object.seal()`

- Object.seal() method seals the object.
- Sealing an object prevents extensions and makes existing property non-configurable. A sealed object has fixed set of properties , new properties cannot be added, existing properties cannot be removed.their enumerability , configurability cannot be changed, and its prototype cannot be reassigned.
- Values of existing properties can still be changed as long as they are writable.
- Seal() returns same object that was passed in.

```
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33
```

` Method chaining is a programming strategy that simplify and embellishes your code. It is a mechanism of calling  a method on another method of same object.`

```
let str="asmiriti";
let revStr=str.split('').reverse().join('')
console.log(revStr);


var firstName = " Rajat ";
console.log(firstName);
var modifiedName = firstName.toUpperCase()
							.trim();
console.log(modifiedName)


```

`Immediately Invoked function expression`

- Functions that are executed as soon as they are mounted , these functions are known as IIFE.
  let x=(function (a,b){
    var c;
    add:function(){

    },
    sub: function(){

    }
    return {
      add,sub,c
    }
  logic
  })()

- Immediately Invoked: This type of function is called immediately invoked as these functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function. If we look at the syntax itself we have two pairs of closed parentheses, the first one contains the logic to be executed and the second one is generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.

- Function Expressions: It is simple to understand that a Function Expression is a Function that is used as an expression. JavaScript lets us use Functions as Function Expressions if we Assign the Function to a variable, wrap the Function within parentheses or put a logical not in front of a function. The following program illustrates the different ways we can create a Function Expression.

/ Creating Function Expression by assigning to a variable.
var myFunc = function() { return "GeeksforGeeks"; };

// Creating Function Expression Using Logical Not.
!function() { return "GeeksforGeeks"; };

// Creating Function Expression Using Parentheses.
let x=(function() { return "GeeksforGeeks"; });

- IIFE have there own function scope i.e. variable you declare in the function expression will not be available outside the function.
- Similarly to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.

(function(dt) {
console.log(dt.toLocaleTimeString());
// Passing the Parameter.
})(new Date());

`Use Cases Of IIFE`

- Avoid polluting global namespace.
- To create closure
- Avoid conflict between libraries and programs.
- It is used in jQuery libraries.
- It is use to work with require function.
- It is used to execute async await function.
