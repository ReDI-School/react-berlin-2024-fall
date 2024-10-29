/**
 * Lesson 10: Event Handlers
 * Event handlers are functions that are called when an event occurs, such as a button click or form submission.
 * In this lesson, we will create a simple button that logs a message to the console when clicked.
 * We will also explore other event handlers, such as onChange, onSubmit, and onClick.
 *
 * the most common event handlers are:
 *
 * - onClick: called when an element is clicked
 * - onChange: called when the value of an input element changes
 * - onSubmit: called when a form is submitted
 * - onFocus: called when an element receives focus
 * - onBlur: called when an element loses focus
 * - onKeyPress: called when a key is pressed
 * - onKeyUp: called when a key is released
 * - onKeyDown: called when a key is pressed down
 * - onMouseOver: called when the mouse pointer moves over an element
 * - onMouseOut: called when the mouse pointer moves out of an element
 * - onScroll: called when an element is scrolled
 * - onResize: called when the window is resized
 */

const Lesson11EventHandlers = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <h1>Event Handlers</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Lesson11EventHandlers;
