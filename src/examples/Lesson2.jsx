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
for (let i = 0; i < FRUITS.length; i++) {
  const fruit = FRUITS[i];
  //console.log(fruit.toUpperCase() + "!");
}
console.log("---------------");
// let's now SHOUT these fruits using a forEach!
FRUITS.forEach((fruit) => {
  //console.log(fruit.toUpperCase() + "!");
});

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

// what if I want a histogram of the sizes of the names of the fruits?
// expected result would be like [{length: 5, count: 4}, {length: 6, count: 3}, {length:7, count: 5}...]
const lengthHistogram = FRUITS.reduce((accum, fruit) => {
  // get the current fruit's length to check
  const length = fruit.length;
  // add the current length to the accumulator
  const addedAlready = accum.some((item) => item.length === length);
  if (addedAlready) {
    return accum.map((item) =>
      item.length === length
        ? { length: item.length, count: item.count + 1 }
        : item
    );
  } else {
    return [...accum, { length: length, count: 1 }];
  }
}, []);

console.log(lengthHistogram);

// what if I want the number of vowels in all the names of the fruits?
const totalVowelLength = FRUITS.map(
  (fruit) => fruit.match(VOWELS_REGEX).length
).reduce((accum, vowels) => accum + vowels, 0);

console.log(totalVowelLength);

// what else is there that we can do with reduce?

export default function Lesson2() {
    return (
      <div className="App">
        <h1>Hello ReDI!</h1>
        <h3>We are going to play with this component here shortly!</h3>
        <MapTest fruits={FRUITS} />
      </div>
    );
  }
  