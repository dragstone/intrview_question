`Call, Apply, Bind`

The main concepts behind this is function borrowing.

- Function borrowing allows us to use the methods of one object on a different object without making the copy of that method and maintain it in two separate places.

- It is accomplised through the use of call(), apply() , bind() all of which exist to explicitly set this on the method we are borrowing.

1. Call invokes the function immediately and allows you to pass arguments one by one (comma separated).
2. Apply invokes the function immediately and allows you to pass arguments as an array.
3. Bind returns a new function , and you can invoke/call it anytime you want by invoking a function.

```
let user={
    name:"asmiriti",
    age:25,
    getNameWithAge: function(city,state){
        console.log(`My name is ${this.name} and age ${this.age}, I am from ${city},${state}`)
    }
}

user.getNameWithAge();

let user1={
    name:"abc",
    age:34
}

user.getNameWithAge.call(user1,"ramgarh","jharkhand");
user.getNameWithAge.apply(user1,["ramgarh","jharkhand"]);
let getUserDetails=user.getNameWithAge.bind(user1,"ramgarh","jharkhand");
getUserDetails();


```
