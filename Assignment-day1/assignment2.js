//Assignment 2: Object Operations
//Objective: Practice adding, removing, and updating values in objects.

//1. Create an empty object called "person".
let person = {};

//2. Add the following properties to the "person" object:
  // - name: "John"
  // - age: 30
  // - city: "New York"
person = {
    name : 'John',
    age : 30,
    city : 'New York'
}

//3. Remove the "age" property from the "person" object.
delete person.age;

//4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = 'Engineer';

//5. Update the "city" property of the "person" object to "San Francisco".
person.city = 'San Francisco';

//6. Print the final "person" object after performing the above operations.
console.log(person);