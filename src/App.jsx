import "./App.css";
//import Lesson1 from './lessons/Lesson1'
// import Lesson3SpreadRest from "./lessons/Lesson3SpreadRest";
// import Lesson4JSX from "./lessons/Lesson4JSX";
// import {
//   HelloClassComponent,
//   HelloFunctionalComponent,
//   Props,
//   ParentComponent,
//   ChildComponent,
//   ClassBasedState,
//   ExampleOfUseState,
// } from "./lessons/Lesson5State";
// import Calculatron from "./lessons/Lesson6Calculatron";
import FruitBasket from "./lessons/Lesson7ConditionalRendering";

// const fruits = ["Orange", "Apple", "Pinapple", "Melon"];

function App() {
  return (
    <>
     {<FruitBasket/>}
      {/* <Calculatron /> */}
      {/* <HelloClassComponent /> */}
      {/* <HelloFunctionalComponent /> */}
      {/* <HelloClassComponent name={"students"} /> */}
      {/* <HelloFunctionalComponent name={"students"} /> */}
      {/* <Props name={"Tiago"} /> */}
      {/* <Props items={fruits} /> */}
      {/* <ParentComponent>
        <ChildComponent first={"Sofia"} second={"Anna"} third={"Karin"} />
        <ChildComponent first={"Tiago"} second={"Anna"} third={"Karin"} />
        <ChildComponent first={"Fabio"} second={"Anna"} third={"Karin"} />
      </ParentComponent> */}
      {/* <ClassBasedState /> */}
      {/* <ExampleOfUseState /> */}
    </>
  );
}

export default App;
