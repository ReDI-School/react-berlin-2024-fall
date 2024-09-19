/**
 * Lesson 1 - Javascript you need to know for React (imports/exports, extra file)
 */

// let's import the one-liner function from the other file!

// let's use the one-liner function!

// let's also create objects, numbers, strings, arrays and functions to export!
const anObject = {
    name: "Tiago",
    yearOfBirth: 1984,
    countryOfOrigin: "Brazil",
    profession: "Software Engineering Consultant",
};

const aNumber = 42;

const aString = "Hello, ReDI!";

const anArray = [1, 2, 3, 4, 5];

const aFunction = (name) => `Hello again, ${name}!`;

// let's export them!

export { anObject, aFunction };

//console.log("Imported:", helloWorld("Tiago"));
