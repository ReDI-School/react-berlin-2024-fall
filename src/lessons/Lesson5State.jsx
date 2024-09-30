import React, { useState } from "react";

// useState documentation: https://react.dev/reference/react/useState

// Props
// State
// useState

//Components
export class HelloClassComponent extends React.Component {
  render() {
    return <div>Class component</div>;
  }
}

export const HelloFunctionalComponent = () => {
  return <div>Functional component</div>;
};

//Props
//Props object vs destructured props
export const Props = (props) => {
  //   console.log("Property: ", props.name);
  //   console.log("Property, deconstructed: ", name);
  console.log("Array props: ", props);

  return (
    <div>
      {/* <h1>Hi {props.name}!</h1> */}
      {props.items.map((prop) => (
        <p key={prop}>{prop}</p>
      ))}
    </div>
  );
};

//Children as props
export const ParentComponent = ({ children }) => {
  console.log("Parent component");
  //Or props.children

  return <ul>{children}</ul>;
};

export const ChildComponent = ({ first, second, third }) => {
  console.log("Child component", first, second, third);
  //Same here, props.first, props.second, props.third

  return (
    <>
      <li>First child: {first}</li>
      <li>Second child: {second}</li>
      <li>Third child: {third}</li>
    </>
  );
};

//State
export class ClassBasedState extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with 'isVisible' set to false
    this.state = {
      isVisible: false,
    };
  }

  // Method to toggle visibility
  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible, // Toggle the current visibility state
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide" : "Show"} Text
        </button>
        {this.state.isVisible && <p>This is some toggled text!</p>}
      </div>
    );
  }
}

//useState
export const ExampleOfUseState = () => {
  const [isVisible, setIsVisible] = useState(false);
  //Always declare hooks at top level to make sure they run the same way every render!
  //Always use the setter function to update state
  //The use-prefix should be limited only to hooks in React, no other variable names such as useIsVisible

  const toggleVisibility = () => {
    isVisible = !isVisible; // Directly mutating the state (not allowed)
    setIsVisible(isVisible); // Using stale state
  };

  //   const toggleVisibility = () => {
  //     setIsVisible((prevVisible) => !prevVisible);
  //   };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is some toggled text!</p>}
    </div>
  );
};

//Time to test out creating a counter!
//https://codesandbox.io/p/sandbox/redi-react-week-03-component-usestate-tally-counter-exercise-1mnoj?file=%2Fsrc%2FTallyCounter.jsx
