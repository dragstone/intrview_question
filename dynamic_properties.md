` Dynamic Object Properties`

- When declaring objects before ES6 , you had to use static keys for properties. But since the release of ES6 , you can use dynamic keys.

```
const obj= {
    name: "asmiriti",
    age: 6
}
```
- You see name and age are static keys.They don't come from anywhere- they are not computed (calculated).These keys are directly added to the object.

- What if you want to add dynamic keys?

-A dynamic key here refers to the result of an expression. For example, a dynamic key can be a variable or a computed value.

` The computed property name `
- The computed property name feature in ES6 allows you to set property name dynamically, the property name will be expressions that evaluate to value.

- This feature is useful for property names that you do not know ahead of time.

- But what about a property name that comes from an expression executed during runtime? Such an expression can be a concatenation, function call, or a conditional expression, to name a few.

- In such cases, you do not know the property name ahead of time. And this is where you use the computed property names feature.

```
const obj= {
    [expression]: value
}
```

` How to Set Variables as Property Names`

```
const key1="language";
const key2="isStudent";

const obj= {
    name: "asmiriti",
    age: 67,
    [key1]: "JS",
    [key2]: true
}

console.log(obj)

output
// {
//   name: "dillion",
//   age: 1000,
//   language: "javascript",
//   isStudent: true
// }
```
- As you can see in this example, name and age are added directly, as static keys. But, language and isStudent are not added as static keys. They are added dynamically, as variable expressions: [key1] and [key2]. The returned values of the expressions then represent the keys that will be added to the object.

`How to Set Conditional Expressions as Property Names`

```
const age=10;
const key1 = "ageIsMoreThan5"
const key2 = "ageIsMoreThan10"

const obj = {
  name: "dillion",
  [age > 10 ? key2 : key1]: true
}

console.log(obj)
// {
//   name: "dillion",
//   ageIsMoreThan5: true
// }
```

