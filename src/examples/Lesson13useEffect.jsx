/**
 *  INSTRUCTIONS:
 *  Build a small app that renders the information coming from the API 
 * 
 *  Build a Card component that will  and render a list of elements.
 *  TASK: [] Each element should represent every single country, in the shape of a card.
 *  TASK: [] Every Card should contain an <h4/> with the name of the country and an <img/> with the flag
 *  TASK: [] OPTONALLY: under the Flag render the additional info from API: for example: Symbol of the currencies of that country / capitals
 * 
 *  []: build an async fetch function to fetch countries: https://restcountries.com/v3.1/all
 *  []: create an useEffect in which you call the fetch function 
 *  []: create state variables to store information form API you store countaries
 *  []: set state with the informations form API
 *  []: map over the state variable in jsx and return a HTML
 *  []: add error handling
 **/

import { useEffect } from "react";
import { useState } from "react"
import "./Lesson13useEffect.css";

const Lesson13Exercise = () => {
  const URL = "https://restcountries.com/v3.1/all";




  return (
    <div className={"container"}>
      replace this with your code
    </div>
  );
};

export default Lesson13Exercise;
