`factory function`
The Factory Function is similar to class/constructor functions, but instead of using new to create an object, factory functions simply creates an object and returns it.

`Why it is useful`
If we have complex logic , and we have to create multiple objects again and again that have same logic, we can write the logic once in a function and use that function as a factory function to create our objects.

```
function createPerson(firstName,lastName){
    return{
        firstName:firstName,
        lastName:lastName,
        getFullName(){
            console.log(firstName+ ' '+ lastName);
        }
    }

}

const person1= createPerson("Asmiriti","Kumari");
const person2= createPerson("John","Doe");

console.log(person1.getFullName());
console.log(person2.getFullName());

```

- By using Factory function , you can create any number of Person objects without duplicating the code.
- Whenever you create an object, JS engine allocates memory to it. If you create many Person objects, the JS engine needs lots of memory space to store these objects.
- However, each person object has a copy of getFullName() method. It's not efficient memory management.
- To avoid duplicating the same getFullName() function in each object we will remove this from createMethod Function and move this getFullName() method to another object.

```
function createPerson(firstName,lastName){
    return{
        firstName:firstName,
        lastName:lastName
    }
}

let personActions={
    getFullName(){
            console.log(firstName+ ' '+ lastName);
        }
}

```

- We will use Object.create method to create a new object using existing object as a prototype

Object.create(prototype,[propertiesObject])

```
let personActions={
    getFullName(){
        console.log(this.firstName+ ' '+ this.lastName);
    }
}

function createFunction(firstName,lastName){
    let person= Object.create(personActions);
    person.firstName=firstName;
    person.lastName=lastName;
    return person;
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());

```
