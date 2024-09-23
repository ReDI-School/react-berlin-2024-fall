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
const shoutedFruits = FRUITS.map((fruit) => {
  return fruit.toUpperCase() + "!";
});

console.log(shoutedFruits);

const repeatedShoutedFruits = FRUITS.map((fruit) => {
  return fruit.toUpperCase();
}).map((fruit) => `${fruit} and ${fruit}`);

console.log(repeatedShoutedFruits);

// let's now also list the fruits in the component!
const uppercaseTransform = (fruit) => fruit.toUpperCase();

function MapTest({ fruits }) {
  return (
    <ul>
      {FRUITS.map(uppercaseTransform).map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}

// can we also tell what place in the array the fruit was in?
const indexedFruits = FRUITS.map((fruit, index) => {
  return {
    index: index,
    name: fruit
  };
});

console.log(indexedFruits);

const fruitLengths = FRUITS.map((fruit) => fruit.length);
console.log(fruitLengths);

// what if I replace all vowels in the fruits by "a"?
const VOWELS_REGEX = /[aeiou]/gi;

const fraats = FRUITS.map((fruit) => fruit.replace(VOWELS_REGEX, "a"));

console.log(fraats);

// and what if I only want the fruits with no letter "a"?
const fruitsWithA = FRUITS.filter((fruit) => fruit.includes("a"));

console.log("fruits with A", fruitsWithA);

// what if I want only the fruits with an odd number of characters?

const oddFruits = FRUITS.filter((fruit) => fruit.length % 2 === 1);
console.log("odd fruits:", oddFruits);

// what if I don't want any melons?

const noMelons = FRUITS.filter((fruit) => !fruit.includes("melon"));
console.log("no melons here!", noMelons);

// what if I want only the fruits that end in "berry"?
const fruitsEndingInBerry = FRUITS.filter((fruit) => fruit.endsWith("berry"));

const MY_STRINGS = ["bla", "ble", undefined, "blo", true, 0, 42];

const onlyStrings = MY_STRINGS.filter((str) => str);
console.log(onlyStrings);

// what if I want only the fruits that have the letter "a",
// but I want to shout whenever there is a BERRY!?

const funFruitsWithA = FRUITS.filter((fruit) =>
  fruit.includes("a")
).map((fruit) => (fruit.includes("berry") ? fruit.toUpperCase() + "!" : fruit));

console.log(funFruitsWithA);

// what if I want to make a whole string with all of the fruits, separated by ", "?
const commaSeparatedFruits = FRUITS.reduce(
  (accum, item) => `${accum}, ${item}`
);
console.log(commaSeparatedFruits);

// what if I want just to count the number of characters in all of the fruits?
const totalCountOfChars = FRUITS.reduce((accum, fruit) => {
  //console.log(`accumulated: ${accum} let's add ${fruit.length}`)
  return accum + fruit.length;
}, 0);
console.log("total:", totalCountOfChars);

// what if I want to reverse the order of the fruits in the array?
const reversedFruits = FRUITS.reduce((accum, fruit) => {
  // console.log(
  //   `accumulator: ${JSON.stringify(
  //     accum
  //   )} - ${typeof accum} - let's add ${fruit} to make ${JSON.stringify([
  //     fruit,
  //     ...accum
  //   ])}`
  // );
  return [fruit, ...accum];
}, []);
console.log(reversedFruits);

// ==========================================================
// I wanna see the total count of characters in all fruits
const sumOfNumberOfCharactersInFruits = FRUITS.reduce((accum, fruit) => accum + fruit.length, 0)

// I wanna see all of the fruits in a single string, but shouted, and without using Array.join()
const shoutedFruitsInOneGo = FRUITS.reduce((accum, fruit) => accum.length > 0 ? `${accum} , ${fruit.toUpperCase()}!` : `${fruit.toUpperCase()}!`, "")

// I wanna see the total count of vowels we have in all of the fruits
const countOfVowelsInFruits = FRUITS.reduce((accum, fruit) => accum + fruit.match(VOWELS_REGEX).length, 0)

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
        <p>Sum of number of characters in all fruits: {sumOfNumberOfCharactersInFruits}</p>
        <ListFruits description="All fruits, but in reverse order" fruits={reversedFruits} />
        <p>Shouted fruits in one go: {shoutedFruitsInOneGo}</p>
        <p>Count of all vowels in fruits: {countOfVowelsInFruits}</p>
    </>
}

export default Lesson3ArrayFuncs;