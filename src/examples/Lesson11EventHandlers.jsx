/**
 * Lesson 11: Event Handlers
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
  const handleClick = (event) => {
    const target = event.target;
    const value = target.value;

    console.log("Input Clicked", value);
  };

  const handleClickDiv = ({ target: { value } }) => {
    console.log("Div Clicked", value);
  };

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log("Input Changed", value);
  };

  const handleOnFocus = ({ target: { value } }) => {
    console.log("Input Focused", value);
  };

  const handleOnBlur = ({ target: { value } }) => {
    console.log("Input Blurred", value);
  };

  const handleOnKeyPress = ({ target: { value } }) => {
    console.log("Key Pressed", value);
  };

  const handleOnKeyUp = ({ target: { value } }) => {
    console.log("Key UP", value);
  };

  const handleOnKeyDown = ({ target: { value } }) => {
    console.log("Key DOWN", value);
  };

  const handleOnMouseOver = ({ target: { value } }) => {
    console.log("Mouse Over", value);
  };

  const handleOnScroll = ({ target: { value } }) => {
    console.log("Scrolled", value);
  };

  return (
    <div>
      <h1>Event Handlers</h1>
      <input
        type="text"
        onClick={handleClick}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onKeyPress={handleOnKeyPress}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        onMouseOver={handleOnMouseOver}
      />
      <input
        type="text"
        onClick={handleClick}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onKeyPress={handleOnKeyPress}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        onMouseOver={handleOnMouseOver}
      />
      <input
        type="text"
        onClick={handleClick}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onKeyPress={handleOnKeyPress}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        onMouseOver={handleOnMouseOver}
      />
      <textarea name="" id="" onScroll={handleOnScroll}></textarea>
      <button onClick={handleClick}>Click Me</button>
      <div onClick={handleClickDiv}>I am a div</div>
    </div>
  );
};

export default Lesson11EventHandlers;
