/**
 * Lesson 3 - Javascript you need to know for React (map, filter, reduce)
 */


// nothing to see here, move along.
function ListFruits({description, fruits}) {
  return <p>
      {description}:
      <ul>
          {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
  </p>
}


function Lesson3ArrayFuncs() {

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
let transformedFruits = [];
for (let i = 0; i < FRUITS.length; i++) {
  transformedFruits.push(`${FRUITS[i]}!`);
}

// let's now SHOUT these fruits using a forEach!
FRUITS.forEach((fruit) => {
  //console.log(fruit.toUpperCase() + "!");
});

// what if we wanted to keep it const? how would we do that?
// const transformedFruits = [] // ????

  

console.log("---------------");

// let's now SHOUT these fruits using map!
const shoutedFruits = FRUITS

// can we also tell what place in the array the fruit was in?
const indexedFruits = FRUITS;

console.log("Indexed fruits:", indexedFruits);

// what if I want to know the length of each fruit's name?
const fruitLengths = FRUITS;


// what if I replace all vowels in the fruits by "a"?
const VOWELS_REGEX = /[aeiou]/gi;

const fraats = FRUITS;


// and what if I only want the fruits with no letter "a"?
const fruitsWithA = FRUITS;


// what if I want only the fruits with an odd number of characters?

const oddFruits = FRUITS;


// what if I don't want any melons?

const noMelons = FRUITS;

// what if I want only the fruits that end in "berry"?
const fruitsEndingInBerry = FRUITS;


// what if I want only the fruits that have the letter "a",
// but I want to shout whenever there is a BERRY!?

const funFruitsWithA = FRUITS;


// what if I want to make a whole string with all of the fruits, separated by ", "?
const commaSeparatedFruits = FRUITS;
console.log('Comma-separated fruits:', commaSeparatedFruits);


// ==========================================================
// I wanna see the total count of characters in all fruits
const sumOfNumberOfCharactersInFruits = FRUITS.reduce((accum, fruit) => accum + fruit.length, 0)

// what if I want to reverse the order of the fruits in the array?
const reversedFruits = FRUITS.reverse(); // this is a trap! what's the problem here? can we do it with reduce?

// I wanna see all of the fruits in a single string, but shouted, and without using Array.join()
const shoutedFruitsInOneGo = FRUITS.join(", ").toUpperCase()	// how do we switch this to use reduce?

// I wanna see the total count of vowels we have in all of the fruits
const countOfVowelsInFruits = 0;

// what else is there that we can do with reduce?

    // if you haven't yet read much on JSX syntax and components, the rest of the file
    // will seem like ✨magic✨, but this will make sense in a few sessions.
    // Don't modify the code below.
    return <>
        <p>Lots of fruits!</p>
        <ListFruits description="List of all fruits" fruits={transformedFruits} />
        <ListFruits description="Shouting the names of the fruits" fruits={shoutedFruits} />
        <ListFruits description="Lenghts of the names of the fruits" fruits={fruitLengths} />
        <ListFruits description="Fruits with replaced vowels" fruits={fraats} />
        <ListFruits description="Only the fruits that have 'a' in their names" fruits={fruitsWithA} />
        <ListFruits description="Only the fruits with odd numbers of characters" fruits={oddFruits} />
        <ListFruits description="Only the fruits that don't have 'melon'" fruits={noMelons} />
        <ListFruits description="Only the fruits that end in 'berry'" fruits={fruitsEndingInBerry} />
        <ListFruits description="Only the fruits that include 'a', but we shout the ones ending in 'berry'" fruits={funFruitsWithA} />
        <p>Sum of number of characters in all fruits: {sumOfNumberOfCharactersInFruits}</p>
        <ListFruits description="All fruits, but in reverse order" fruits={reversedFruits} />
        <p>Shouted fruits in one go: {shoutedFruitsInOneGo}</p>
        <p>Count of all vowels in fruits: {countOfVowelsInFruits}</p>
    </>
}

export default Lesson3ArrayFuncs;