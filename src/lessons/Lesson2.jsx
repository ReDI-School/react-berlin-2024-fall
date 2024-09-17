/**
 * Lesson 2 - Javascript you need to know for React
 */

const FRUITS = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "cranberry",
    "grape",
    "grapefruit",
    "lemon",
    "lime",
    "melon",
    "orange",
    "papaya",
    "pineapple",
    "raspberry",
    "strawberry",
    "tomato",
    "watermelon"
  ];
  
// let's SHOUT these fruits using a for loop!

console.log("---------------");
// let's now SHOUT these fruits using a forEach!

console.log("---------------");

// let's now SHOUT these fruits using map!

// let's now also list the fruits in the component!
const uppercaseTransform = (fruit) => fruit.toUpperCase();

function MapTest({ fruits }) {
  return <ul></ul>;
}

// can we also tell what place in the array the fruit was in?

// what if I replace all vowels in the fruits by "a"?
const VOWELS_REGEX = /[aeiou]/gi;

const fraats = [];

console.log("fraats", fraats);

// and what if I only want the fruits with no letter "a"?
const fruitsWithA = [];

console.log("fruits with A", fruitsWithA);

// what if I want only the fruits with an odd number of characters?

const oddFruits = [];
console.log("odd fruits:", oddFruits);

// what if I don't want any melons?

const noMelons = [];
console.log("no melons here!", noMelons);

const MY_STRINGS = ["bla", "ble", undefined, "blo", true, 0, 42];

const onlyStrings = [];
console.log("only strings:", onlyStrings);

// what if I want only the fruits that have the letter "a",
// but I want to shout whenever there is a BERRY!?

const funFruitsWithA = [];

console.log("fruits with A, but FUN!", funFruitsWithA);

// what if I want to make a whole string with all of the fruits, separated by ", "?
const commaSeparatedFruits = [];
console.log("comma separated fruits with reduce:", commaSeparatedFruits);

// what if I want just to count the number of characters in all of the fruits?
const totalCountOfChars = 0;
console.log("total count of chars in all fruits:", totalCountOfChars);

// what if I want to reverse the order of the fruits in the array?
const reversedFruits = [];
console.log("reversed fruits:", reversedFruits);

// what if I want a histogram of the sizes of the names of the fruits?
// expected result would be like [{length: 5, count: 4}, {length: 6, count: 3}, {length:7, count: 5}...]
const lengthHistogram = [];

console.log("fruit name length histogram:", lengthHistogram);

// what if I want the number of vowels in all the names of the fruits?
const totalVowelLength = [];

console.log("total amount of vowels:", totalVowelLength);

// what else is there that we can do with reduce?



export default function Lesson2() {
    return (
      <div>
        <h1>Hello ReDI!</h1>
        <h3>We are going to play with this bit of code here shortly!</h3>
        <MapTest fruits={FRUITS} />
      </div>
    );
  }