` Auto Type Conversion `

- When an operator is used by incorrect type, JS will convert that value to the type it needs to do the calculation. This is called type coercion. Type coercion can lead to results that are unexpected.

```
console.log(8 * null) // 0
console.log("5" - 1) // 4
console.log( "5" + 1) // "51"
console.log("five" * 2) // NaN

```

- If JavaScript doesn’t know what type to change the value to, it will result in NaN.

```
console.log(0 == false) // true
console.log("" == false) // true

```

- Even though the two compared values are not the same, the two examples above are true because of type coercion. JavaScript quietly changes the type of 0 and "" into a boolean and output true. If you wanted the items compared to be precisely equal, you would use ===.


- For the && and the || operator, there is something called a short-circuit operation. Depending on the operator and the output, it will only evaluate what’s on the right or left side.

- With the || operator, JavaScript will try to convert the value on the left side of the operator to a Boolean. If JavaScript seems to be unable to change the value on the left to a truthy value, it will default to other value on the right. If both are true, it will default to the original value on the left.
&& will do the reverse.

console.log(null || "user") // "user"
console.log("Agnes" || "user") "Agnes"

console.log(null && "user") // "user"
console.log("Agnes" && "user") // "Agnes"

https://www.geeksforgeeks.org/what-is-type-coercion-in-javascript/


`arrow function`

https://www.programiz.com/javascript/arrow-function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

