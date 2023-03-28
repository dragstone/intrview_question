`Higher order function`

Higher order function is a function that takes one or more functions as arguments, or returns a function as result.

There are several higher order functions are like map, reduce, filters.

```
function callBackFunction(){
console.log("I am callback")
}

function higherOrderFunction(fun){
console.log("I am higher order function");
fun();
}

higherOrderFunction(callBackFunction)
```

this is higher order function as we are passing a callback function as parameter to it.

`How higher order function works`

1. Suppose i want to write a function that calculates the area and diameter of the circle.
2. As beginner we will create separate function to calculate area and diameter.

`Without higher order function`

```
let radius=[9, 6, 2, 3, 1];

//function to create area of circle

const calculateArea=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

const calculateDiameter=(radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

cosole.log(calculateArea);
console.log(calculateDiameter)
```

`With higher order function`

```
const calculateArea=(radius)=>{
  return Math.PI*radius*radius;
}

const calculateDiameter=(radius)=>{
  return 2*radius;
}

const higherOrderCircleCal(radius,logic){
  let output=[];
  for(let i=0;i<radius.length;i++)
  {
    output.push(logic(radius[i]));
  }
  return output;
}

```

console.log(higherOrderCircleCal(radius,calculateArea))
console.log(higherOrderCircleCal(radius,calculateDiameter))
