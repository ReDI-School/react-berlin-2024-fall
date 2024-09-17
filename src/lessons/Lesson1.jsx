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


// how about we make it const instead of let?


// now let's change the concatenation to a template string!


// now let's change the function to an arrow function!


// now let's make it a one-liner!


// now let's export the function so we can use it in another file!


// but wait, what is the difference between a normal function and an arrow function?


// let's see an example of a normal function that uses the 'this' keyword


// now let's see an example of an arrow function that uses the 'this' keyword


// now let's import another file and use the functions and other things there!
// notice how we can also rename the imported functions and variables, in the process called 'aliasing'
// we are going to see this in the next lesson again.

export default function Lesson1() {
    return (<>
        <div>{hello('Tiago')}</div>
    </>);
}