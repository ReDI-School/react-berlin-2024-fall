import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./MenuItem.module.css";


const MenuItemDetails = () => {
  // Hold a temporary value for meal until we fetch the real data. Show a loading message while it's null
  const [meal, setMeal] = useState(null);
  // Hold a boolean value for error in case we run into an error while fetching to give the user feedback and redirect back home
  const [error, setError] = useState(false);

  // Hooks from react-router-dom
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // Here is another API endpoint from themealdb.com where we can pass an individual ID
    // This is important to be able to load this route from a link by pasting in the direct URL
    // Rather than passing down props, so that someone can access our website directly, e.g. https://oursite.com/meals/52977
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => r.json())
      .then((response) => {
        if (response?.meals?.[0]) {
          setMeal(response.meals[0]);
        } else {
          throw new Error("No results");
        }
      })
      .catch((e) => {
        console.error(e);
        setError(true);
        // Show the error for 3 seconds and then redirect back home
        setTimeout(() => {
          navigate("/");
        }, 3000);
      });
  }, [navigate, id]);

  if (error) {
    return (
      <div className={styles.menuItemDetail}>
        <h2>
          An error occurred getting meal details. Redirecting to homepage.
        </h2>
      </div>
    );
  }

  if (meal === null) {
    return (
      <div className={styles.menuItemDetail}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className={styles.menuItemDetail}>
      <Button onClick={() => navigate("/")}>return Home</Button>
      <h1>{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.image}
      />
      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {meal.strArea}
      </p>
      <p>
        <strong>Tags:</strong> {meal.strTags}
      </p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{meal.strInstructions}</p>
      {meal.strYoutube && (
        <div>
          <h2>Video</h2>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      )}
      {meal.strSource && (
        <div>
          <h2>Source</h2>
          <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
            Original Recipe
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuItemDetails;