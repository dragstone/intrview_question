`arguments`

- arguments is array-like object accessible inside functions that contains the values of the arguments passed to that function.

```
function fun1(a,b,c){
    console.log(arguments[0],arguments[1],arguments[2]);
}

func1(1,2,3);

output 
1 2 3

```

- arguments object is a local variable available within all non-arrow functions.

- The arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions , such as Math.min().

- Below is the example function accepts any number of string arguments and return longest one.

```
function longestString(a){
    let longest="";
    for(let i=0;i<arguments.length;i++){
        if(arguments[i].length>longest.length){
            longest=arguments[i];
        }
    }
    return longest;
}

console.log(longestString("apple","banana","watermelon","pineapple","icecream","strawberry"));

output
watermelon

```
- You can use arguments.length to count how many arguments the function was called with.

- If you want to count how many parameters a function is declared to accept , inspect that function's length property.

```
console.log(longestString.length)

output
1
```

- arguments is an array-like object, it has length property and properties indexed from zero, but it doesn't have Array built-in methods like map(), forEach().

- We can convert it to Array using one of this method, slice(),Array.from(),spread syntax.

```
function fun1(a,b,c){
    console.log(Array.prototype.slice.call(arguments));
    console.log(Array.from(arguments));
    console.log([...arguments]);
}

fun1(1,2,3);

output
[1.2.3]
[1.2.3]
[1.2.3]
```
