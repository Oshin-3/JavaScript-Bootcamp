//Assignment 3: Array of Objects Operations
//Objective: Practice adding, removing, and updating values in an array of objects.

//1. Create an empty array called "cars".
let cars = [];

//2. Add three car objects to the "cars" array. Each car object should have the following properties:
   //- make: "Toyota"
   //- model: "Camry"
   //- year: 2018
cars.push({
    make : 'Toyota',
    model : 'Camry',
    year : 2018
}, 
{
    make : 'Tata',
    model : 'Nexon',
    year : 2017
},
{
    make : 'Honda',
    model : 'City',
    year : 1998
}
);

//3. Remove the first car object from the "cars" array.
cars.shift();

//4. Add a new car object to the "cars" array with the following properties:
   //- make: "Honda"
   //- model: "Civic"
   //- year: 2020
cars.push({
    make : 'Honda',
    model : 'Civic',
    year : 2020
})

//5. Update the "model" property of the second car object in the array to "Accord".
cars[1].model = 'Accord';

//6. Print the final "cars" array after performing the above operations.
console.log(cars);
