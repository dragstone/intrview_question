`Currying in JS`

- It is a technique in functional programming, that transforms the function of multiple arguments into several functions of single argument in sequence.

```
function simpleArguments(param1, param2, param3);

function simpleArguments(param1)(param2)(param3);

```

- We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result. 

- Why is currying useful in JavaScript?

It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable.

```
function calculateVolume(length,breadth,height){
    return length*breadth,height;
}
console.log(calculateVolume(4, 5, 6));
```

- currying technique with the help of closures. During the thread of execution, the calculateVolume() function will be invoked. Inside there is an anonymous function, that receives a parameter and returns some code. We are exposing our function to another function, so closure will be created. Closure always contains the function definition along with the lexical environment of the parent, both things remain connected as a bundle. Hence, it does not matter where we invoke them, the all inner functions will always hold access to the variable of their parent.
As soon as we have got the returned result as a function the next argument is ready to be passed, this process will continue till the second last function. Finally, the innermost return keyword returns the expected result.


```
function calculateVolume(length){
    return function(breadth){
        return function(height){
            return length*breadth*height;
        }
    }
}

console.log(calculateVolume(7)(8)(9));
```