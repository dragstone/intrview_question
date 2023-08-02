`Memoization`

- Memoization: Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.

- Expensive Function Calls: Time and memory are the two most important resources in computer applications. As a result, an expensive function call is one that consumes large amounts of these two resources due to extensive calculation during execution.
- Cache: A cache is just a temporary data store that stores data in order to serve future requests for that data more quickly.

- Importance of Memoization: When a function is given in input, it performs the necessary computation and saves the result in a cache before returning the value. If the same input is received again in the future, it will not be necessary to repeat the process. It would simply return the cached answer from the memory. This will result in a large reduction in a code’s execution time.

https://medium.com/nerd-for-tech/javascript-memoization-patterns-f0438f96a696