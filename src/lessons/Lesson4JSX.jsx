// To understand the basic structure of the ReactDOM integration we discussed,
// please look at index.html, src/main.jsx, and src/App.jsx

function Lesson4JSX() {
  const favMeals = [
    "pasta alfredo",
    "sushi",
    "gyros",
    "seafood",
    "tacos",
    "sushi",
  ];

  // we can build a list of JSX elements in different ways
  const listExampleWithoutKeys = favMeals.map((thisMeal) => (
    <li>{thisMeal}</li>
  ));

  const anotherWayOfWritingIt = favMeals.map((thisMeal) => {
    console.log("We could use console.log here", thisMeal);
    return <li>{thisMeal}</li>;
  });

  const aThirdWay = favMeals.map(function (thisMeal) {
    console.log("We could use console.log here too", thisMeal);
    return <li>{thisMeal}</li>;
  });

  /*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ul>{listExampleWithoutKeys}</ul>
  </React.StrictMode>
);
*/

  // to fix the warnings about missing keys, let's add one
  const listExampleWithKeys = favMeals.map((thisMeal) => (
    <li key={thisMeal}>{thisMeal}</li>
  ));

  // we could also use the index as a key (although it's not recommended)
  // see https://react.dev/learn/rendering-lists#where-to-get-your-key for correct ways
  const listExampleWithKeysIndex = favMeals.map((thisMeal, index) => (
    <li key={thisMeal + index}>{thisMeal}</li>
  ));

  // then, we can add an onClick handler:
  const listWithAlert = favMeals.map(function (thisMeal, index) {
    const sayMealName = () => {
      alert(`${thisMeal} at ${index}`);
    };

    return (
      <li onClick={sayMealName} key={thisMeal + index}>
        {thisMeal}
      </li>
    );
  });

  const likeSushi = true;
  const age = 20;
  const course = {
    name: "React",
    topic: "foods",
  };

  return (
    <>
      <ul>{listWithAlert}</ul>
      <div>I {likeSushi ? "do" : "don't"} like sushi</div>
      <div>
        Using &&, we can render an element only if a condition is truthy:{" "}
        {/* The {" "} is added to keep a space at the end of the previous line */}
        {age > 18 && "User is over 18"}
      </div>
      <div>
        We can use || to render something only if it is falsy:{" "}
        {(false && `"true"`) || `"false"`}
      </div>
      <div>
        We can also combine different expressions and access objects:{" "}
        {course.name === "React" &&
          course.topic === "foods" &&
          "This is a React class that uses foods as an example"}
        {/* But if we use more expressions, we should probably move them to a variable */}
      </div>
    </>
  );
}

export default Lesson4JSX;
