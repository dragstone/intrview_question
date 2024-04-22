`Memoization`

- Memoization: Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.

- Expensive Function Calls: Time and memory are the two most important resources in computer applications. As a result, an expensive function call is one that consumes large amounts of these two resources due to extensive calculation during execution.
- Cache: A cache is just a temporary data store that stores data in order to serve future requests for that data more quickly.

- Importance of Memoization: When a function is given in input, it performs the necessary computation and saves the result in a cache before returning the value. If the same input is received again in the future, it will not be necessary to repeat the process. It would simply return the cached answer from the memory. This will result in a large reduction in a code’s execution time.

https://medium.com/nerd-for-tech/javascript-memoization-patterns-f0438f96a696

- Memoization using closure

```
const fibonacci = () =>{
  const cache = {}; // Store computed Fibonacci numbers

  const fib = (n) => {
    if (n <= 1) return n;
    if (cache[n]) return cache[n]; // If result is already computed, return from cache
    cache[n] = fib(n - 1) + fib(n - 2); // Calculate and cache the result
    return cache[n];
  };

  // Return the memoized Fibonacci function
  return fib;
}
const fibonacciCall= fibonacci();
// Test the memoized Fibonacci function
console.log(fibonacciCall(10)); // Output: 55
console.log(fibonacciCall(20)); // Output: 6765
console.log(fibonacciCall(30)); // Output: 832040
console.log(fibonacciCall(40)); // Output: 102334155

```

- Memoization using higher order function

```
// Higher-order function for memoization
const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    console.log(key);
    if (!(key in cache)) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
};

// Function to calculate Fibonacci series (recursive)
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Memoize the Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Test memoized Fibonacci function
console.log(memoizedFibonacci(5)); // Output: 5
console.log(memoizedFibonacci(10)); // Output: 55
console.log(memoizedFibonacci(20)); // Output: 6765


```
