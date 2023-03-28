`Difference between forEach and map`

`forEach`

1. The forEach( ) method doesn't return new array based on given array.
2. forEach() method return undefined.
3. As forEach() doesn't return anything , hence chaining technique cannot be applied here.

```
let myArr=[8,9,6,4,1];
const returnValues=myArr.forEach((element)=>element*6).reverse()

output
undefined

```

`map`

1. The map() method returns entirely new array.
2. The map() method return entirely new array according to the provided callback function.
3. With map() we can chain other methods like reduce(),sort()

```
let myArr=[8,9,6,4,1];
const returnValues=myArr.forEach((element)=>element*6).reverse()

output
undefined

```
