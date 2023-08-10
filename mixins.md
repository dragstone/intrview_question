https://medium.com/@mariappan/mixins-in-javascript-simplified-58782141519b

` mixins `

- Javascript is an object. And, every such object has its own prototype. Now let’s take a look at our Car object’s prototype.

- You can access the prototype in any of the following ways,
```
let Car={ name:"Ferrari" }

Object.getPrototypeOf(Car)

Object.getPrototypeOf(Car)
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

```

- In a similar way, an object’s prototype object can also have prototypes.

- There can be only one [[prototype]]for an object in Javascript, which means we can only inherit from a single object.

- But, sometimes our application might demand to extend more than one. Let’s try to understand this with an example.

Say, for instance, we’ve two classes User and CleanRoom. Suppose we need to add CleanRoom functionality to User, so that users can clean the room at demand. Here's where a concept called mixins comes into the picture.

`Mixins for Javascript`

- Mixin is a generic object-oriented programming term — is a class containing methods that can be used by other classes without a need to inherit from it.

- Mixins allow objects to borrow functionality from them with a minimal amount of complexity. They can be viewed as objects with attributes and methods that can be easily shared across a number of other object prototypes.

```
// mixin
let cleanRoomMixin = {
     cleanRoom() {
     alert(`Hello ${this.name}, your room is clean now`);
},
sayBye() {
     alert(`Bye ${this.name}`);
}
};

// usage:
class User from Human{
     constructor(name) {
          this.name = name;
     }
}

// copy the methods
Object.assign(User.prototype, cleanRoomMixin);

// now User can clean the room
new User("Max").cleanRoom(); // Hello Max, your room is clean now!

```

- In the above code, we’ve created a cleanRoomMixin which has two actions defined cleanRoom and sayBye . We do also have a User object with a simple constructor to initialize name property.

- Now, to bind cleanRoom action to User the object we use the Object.assign method and bind the mixin to the object’s prototype. This way we can make use of any action independently in different objects.

- There’s no inheritance here, just simple method copying. In simple words, mixins help to create self-contained objects of similar features.

- Though mixins help in decreasing functional repetition and promote function reuse, they might become a point of conflict if they accidentally overwrite existing class methods. So generally one should think well about the naming methods of a mixin, to minimize the probability of that happening.