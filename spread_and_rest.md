`Spread and Rest Operator`

`Spread operator`

- The spread operator is used to expand an iterables (array , object) into individual elements.
- It allows you to split an iterable into multiple elements which can be used in different context.

1. Copying Arrays: Create shallow copy of array.

```
conat arr=[5,7,8,9,4];
const newArr= [...arr]

```

2. Concatenating Arrays: Combining multiple arrays into single array.

```
const arr1=[1,2,3];
const arr2=[5,8,9];
const combinedArr=[...arr1,...arr2]

```

3. Passing array elements as aruguments: Passing elements of an array as individual arguments to a function.

```
const arr=[1,3,8];
Math.max(...arr)
```

4. Creating new array with aditional elements: Adding new elements in existing array.

```
const arr=[2,7,8,9];
const newArr= [...arr,1,3]
```

`Rest operator`

- The rest parameter in JS is a feature that allows you to accept indefinite number of arguments as an array.It is denoted by three dots followed by parameter name.

```
function add(...args){
    let sum=0;
   args.map(item=>sum+=item)
   return sum;
}

add(1,2,3,5,8,9);

```
