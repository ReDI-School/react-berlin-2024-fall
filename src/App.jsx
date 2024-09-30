import "./App.css";
//import Lesson1 from './lessons/Lesson1'
// import Lesson3SpreadRest from "./lessons/Lesson3SpreadRest";
// import Lesson4JSX from "./lessons/Lesson4JSX";
import {
  HelloClassComponent,
  HelloFunctionalComponent,
  Props,
  ParentComponent,
  ChildComponent,
  ClassBasedState,
  ExampleOfUseState,
} from "./lessons/Lesson5State";

const fruits = ["Orange", "Apple", "Pinapple", "Melon"];

function App() {
  return (
    <>
      {/* <HelloClassComponent /> */}
      {/* <HelloFunctionalComponent /> */}
      {/* <Props name={"students"} /> */}
      {/* <Props items={fruits} /> */}
      {/* <ParentComponent>
        <ChildComponent first={"Sofia"} second={"Anna"} third={"Karin"} />
      </ParentComponent> */}
      {/* <ClassBasedState /> */}
      {/* <ExampleOfUseState /> */}
    </>
  );
}

export default App;
