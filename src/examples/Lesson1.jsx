/**
 * Lesson 1 - Javascript you need to know for React (string interpolation, arrow functions and imports/exports)
 */

// Oh, hello! I didn't see you there. I was just writing some code.
function hello(name) {
    var uppercaseName = name.toUpperCase();
    var greeting = 'Hello, ';
    greeting += uppercaseName;
    greeting += '!';
    return greeting;
}

// that code is so 2015! Let's change the variable declarations to something more modern.

function helloUsingLet(name) {
    let uppercaseName = name.toUpperCase();
    let greeting = 'Hello, ';
    greeting += uppercaseName;
    greeting += '!';
    return greeting;
}

// how about we make it const instead of let?

function helloUsingConst(name) {
    const uppercaseName = name.toUpperCase();
    // notice that we can't use the += operator with const
    const greeting = 'Hello, ' + uppercaseName + '!';
    return greeting;
}

// now let's change the concatenation to a template string!

function helloUsingTemplateString(name) {
    const greeting = `Hello, ${name.toUpperCase()}!`;
    return greeting;
}

// now let's change the function to an arrow function!

const helloUsingArrowFunction = (name) => {
    const greeting = `Hello, ${name.toUpperCase()}!`;
    return greeting;
}

// now let's make it a one-liner!

const helloOneLiner = (name) => `Hello, ${name.toUpperCase()}!`;

// now let's export the function so we can use it in another file!

export { hello, helloUsingLet, helloUsingConst, helloUsingTemplateString, helloUsingArrowFunction, helloOneLiner };

// but wait, what is the difference between a normal function and an arrow function?

// let's see an example of a normal function that uses the 'this' keyword
const normalFunction = function() {
    console.log('normal function "this"', this);
}
normalFunction(); // what is 'this'?

// now let's see an example of an arrow function that uses the 'this' keyword
const arrowFunction = () => {
    console.log('arrow function "this"', this);
}

arrowFunction(); // what is 'this'? 

// now let's import another file and use the functions and other things there!
// notice how we can also rename the imported functions and variables, in the process called 'aliasing'
// we are going to see this in the next lesson again.

import { anObject, anArray, aFunction as helloAgain, aString as importedMessage } from "../examples/Lesson1Extra";

console.log(helloAgain(anObject.name));
console.log(anArray);
console.log(importedMessage);

export default function Lesson1() {
    return (<>
        <div>{helloOneLiner('Tiago')}</div>
    </>);
}