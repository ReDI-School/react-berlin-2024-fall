/**
 *  INSTRUCTIONS:
 *  Build a small app that renders the information coming from the API https://restcountries.com/v3.1/all.
 *  Build a component in which you should make a request to the API and render a list of elements.
 *  Each element should represent every single country, in the shape of a card.
 *  Every Card should contain an <h4/> with the name of the country and an <img/> with the flag
 *  OPTONALLY: under the Flag render the additional info from API: for example: Symbol of the currencies of that country / capitals
 **/

import { useEffect, useState } from "react";
import "./Lesson13useEffect.css";
import CountryCard from "../components/CountryCard/"

const Lesson13Exercise = () => {
  const URL = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        setIsLoading(false);
        setErrorMessage("something went wrong");
        throw new Error("something went wrong");
      }
      const result = await response.json();
      setCountries(result);
      setIsLoading(false);
      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
      setIsLoading(false);
      setErrorMessage("Problems with the server...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className={"container"}>
      <div>
        {countries &&
          countries.map((country, i) => <CountryCard country={country} key={i} />)}
      </div>
      {isLoading && <h1>....LOADING...</h1>}
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  );
};

export default Lesson13Exercise;
