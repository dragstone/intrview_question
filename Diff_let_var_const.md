`Difference between let , var , const`

`var`

- Global scoped or function scoped.Variable defined outside the scope can be accessed globally and variable defined inside a particular function can be accessed withn function.

```
var a=10;
function f(){
var b=9;
console.log(a);
}
f();
console.log(a);
console.log(b);

output
10
ReferenceError: b is not defined
```

- User can re-declare the variable using var and can update the value.

```
var a=9;

var a=8;

a=6;

- If user uses var variable before declaration, it initialize with undefined value

console.log(a);

var a=8;

Output
undefined
```

`let`

- blocked scope. It can't be accessible outside the particular block.

```
function f(){
let b=9;
console.log(b);
}
console.log(b);

output
9
ReferenceError: b is not defined
```

- User can't redeclare the variable defined with let but can update it.

```
let a=10;

let a=8; // not allowed

a=7 // allowed

output
syntaxError: Identifier a has already been declared
```

- User can declare the variable with same name in different blocks using let variable.

```
let a=10;
if(true){
let a=9;
console.log(a);
}
console.log(a);

output
9
10
```

- If user use the let variable before the declaration it will return error

```
console.log(a);
let a=8;

output
ReferenceError: Cannot access a before initialization
```

`const`

- Block scoped.
- When user declare const variable, they need to initialize it, otherwise it returns error.
- User cannot update the const variable once it is declared.

```
const a=9;
function f(){
a=8;
console.log(a);
}
f();

output
TypeError: Assisgment to const variable
```

- User cannot change the properties of const object but we can change the value of properties of the const object.

```
const a={
prop1: 10,
prop2:8
}

a.prop1=5; // allowed

a={
p:5,
prop2:8
}

output

SyntaxError: unexpected identifier
```

`Reference`

[geeksforgeeks url](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/)
