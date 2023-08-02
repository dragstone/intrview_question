`undefined Vs null`

- undefined means variable has been declared , but its value has not been assigned.
Unlike null, the value of an undefined variable is set by JavaScript as undefined. The variable gets created at the run-time. When we do not pass an argument for a function parameter, the default value is taken as undefined. Besides, when a function doesn't return a value, it returns undefined.


- null means empty or null value.The variable which has been assigned as null contains no value.Also, null is an object in JavaScript. When it gets assigned to a variable, it represents no value. The setting of the value must be done manually by the user as JavaScript never sets the value as null. An object can be emptied by setting it to null.

```
var x=null;
console.log(typeof(x));

object


console.log(typeof undefined);

undefined

```


While performing various arithmetic operations, null is converted to 0, and then the operation is performed, while undefined is converted to NaN. This is so because while performing arithmetic operations, the function toNumber() gets called on it, which converts null to 0 and undefined to NaN.

```

var length=19;
var breadth;

var area=length*breadth;
console.log(area);//NaN

var length2=19;
var breadth2=null;

var area2=length2*breadth2;
console.log(area2);//0

output 

NaN
0

```

Area	Undefined	Null
Definition	Undefined means the variable has been declared, but its value has not been assigned.	Null means an empty value or a blank value.
The typeof operator	The typeof() operator returns undefined for an undefined variable.	The typeof() operator returns the type as an object for a variable whose value is assigned as null.
On performing arithmetic operations	It returns NaN on performing arithmetic operations.	converts to 0 then perform the operation
Is it an assignment value?	No, as there is no value assigned to the variable, it becomes undefined.	Yes, as we assign null to a variable, it is an assignment value.


https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/