`Clouser`

- A clouser is combination of function bundled together with its lexical scope. In other words clousers gives u an access of outer function scope from inner function.

- When a function is defined within another function, the inner function has access to variables defined in the outer function, as well as variables defined in any enclosing functions (up to the global scope). This behavior forms a chain of lexical scopes, also known as the scope chain.

- Here are some real-time examples to illustrate closures in javascript:

1. Private Variables

```
function createCounter(){
    let count=0;

    return {
        increment: function(){
            count++;
            console.log("count",count)
        },
        decrement: function(){
            count--;
            console.log("count",count);
        },
        getCount: function(){
            return count;
        }
    }
}

const counter= createCounter();
counter.increment();
counter.increment();
console.log('Final Count:', counter.getCount());

```

- In this example, createCounter returns an object with three methods (increment, decrement, getCount). These methods have access to the count variable even though createCounter has finished executing. This encapsulates count and prevents external code from modifying it directly.

2. Event Handlers

```
function addClickHandler(element){
    let count=0;
  element.addEventListener("click",function(){
    count++;
    console.log(`Button clicked ${count} times`);
  })
}

let button= document.getElementById("btn");
addClickHandler(button)

```

- In this example, addClickHandler adds a click event listener to a button element. Inside the event listener function, count is incremented each time the button is clicked. Since the event listener function is a closure, it retains access to the count variable even though addClickHandler has finished executing

3. Module Pattern

```
const calculator= (function(){
    let result=0;
    return {
        add: function(num){
            result+=num;
            console.log("add",result);
        },
        subtract: function(num){
            result-=num;
            console.log("add",result);
        },
        getResult: function(){
            return result;
        }
    }
})();

calculator.add(6);
calculator.subtract(4);
console.log('Result:', calculator.getResult());


```

- In this example, an immediately invoked function expression (IIFE) is used to create a module with private state (result). The returned object provides methods to manipulate the state (add, subtract, getResult), maintaining encapsulation and preventing direct access to the result variable.
