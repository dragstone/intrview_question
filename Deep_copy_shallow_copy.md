`Deep Copy Shallow Copy`

- Primitive data type like string, number,null,undefined,boolean, string , original value is copied in JS.

```
let x=9;
y=x;
y=8;
console.log(x);
console.log(y);

output
9
8
```

- With non-primitive data types like arrays and objects, only reference to values are passed.

```
let adam={ name:"adam"}
let jason=adam;
jason.name="jason";
console.log(adam);
console.log(jason);

output
{ name:"adam"}
{ name:"jason"}

```

- JSON.stringify() and JSON.parse()	deep copies nested objects	doesn't copy functions.

- Object.assign()	copies the immediate members of an object—including functions	doesn't deep copy nested objects
 
- the ... spread operator	simple syntax, the preferred way to copy an object	doesn't deep copy nested objects

- Lodash cloneDeep()	clones nested objects including functions	adds an external dependency to your project


`JSON.parse(JSON.stringify())`

- The JSON.stringify() takes in an object and returns string from it.
- The JSON.parse() method parses a string and returns a JavaScript object.

```
const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}
let clone = JSON.parse(JSON.stringify(user))
console.log(user)
console.log(clone)

```

- When the copy object is mutated, the original object stays the same:

```
clone.age = 32
console.log(user)
console.log(clone)
/* 
{ 
age: 28, 
job: "Web Developer", 
name: "Kingsley" 
} 
{ 
age: 32, 
job: "Web Developer", 
name: "Kingsley" 
} 
*/
```

- However, there is one caveat to using this approach: JSON.stringify() does not copy functions.

- Suppose we have a method in our object user called incrementAge

```
const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    incrementAge: function() {
  	  this.age++
    }
}

```

- The function will not be available in the copied object. Thus, this method achieves deep copy only if there is no function within the object.

` Object.assign()`
```
const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    incrementAge: function() {
  	  this.age++
    }
}
let clone = Object.assign({}, user)
```
- Object.assign() will copy everything into the new object, including any functions. Mutating the copied object also doesn't affect the original object.

```
clone.age = 32
console.log(user)
console.log(clone)
/* 
{ 
age: 28, 
incrementAge: function() { 
this.age++ 
}, 
job: "Web Developer", 
name: "Kingsley" 
} 
{ 
age: 32, 
incrementAge: function() { 
this.age++ 
}, 
job: "Web Developer", 
name: "Kingsley" 
} 
*/
```
- However, one thing to remember about Object.assign() is that the method only performs a partial deep copy on objects.

```
const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    location: {
      city: "Lagos",
    }
}
const clone = Object.assign({}, user)
```

- Whenever we mutate a property within the nested object (in clone), it will also mutate the same property in the original object (users). Let's take a look:

```
clone.age = 32
clone.location.city = "New York"
console.log(user)
console.log(clone)
/* 
{ 
age: 28, 
job: "Web Developer", 
location: { 
city: "New York" 
}, 
name: "Kingsley" 
} 

{ 
age: 32, 
job: "Web Developer", 
location: { 
city: "New York" 
}, 
name: "Kingsley" 
} 
*/
```

- Hence, the Object.assign() method should be used to  copy objects that have no nested objects. 


` Spread Operator`

```
const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}
const clone = {...user}
console.log(clone);
```

- However, much like with Object.assign(), the spread operator only makes a partial copy. So any object with a nested object will not be deep copied.

- To make a complete deep copy with the spread operator, we'll have to write some additional code.

- Consider the same user object but with a nested object:

```
let user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    location: {
        city: "Lagos",
    }
}
let clone = {...user}
```

- To avoid mutating the original object, which is user, we must spread the copy object before making direct changes to any of its properties. For any nested object, we must also spread that sub-object before making changes to any of its properties:

```
clone={
    ...clone,
    age:32,
    location:{
        ...clone.location,
        city:"New York"
    }
}
console.log(user)
console.log(clone)
/* 
{ 
age: 28, 
job: "Web Developer", 
location: { 
city: "Lagos" 
}, 
name: "Kingsley" 
} 

{ 
age: 32, 
job: "Web Developer", 
location: { 
city: "New York" 
}, 
name: "Kingsley" 
} 
*/
```

` Use Lodash cloneDeep() for Deep Copying`
- Lodash also provides a utility method _.cloneDeep() for deep cloning of objects in JavaScript.