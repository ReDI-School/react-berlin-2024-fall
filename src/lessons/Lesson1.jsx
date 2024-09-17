/**
 * Lesson 1 - Javascript you need to know for React (string interpolation and arrow functions)
 */

// Oh, hello! I didn't see you there. I was just writing some code.
function hello(name) {
    var greeting = 'Hello, ';
    greeting += name;
    greeting += '!';
    return greeting;
}

// that code is so 2015! Let's change the variable declaration to something more modern.


// how about we make it const instead of let?


// now let's change the concatenation to a template string!


// now let's change the function to an arrow function!


export default function Lesson1() {
    return (<>
        <div>{hello('Tiago')}</div>
    </>);
}