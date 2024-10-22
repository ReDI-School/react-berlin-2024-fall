import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./MenuItem.module.css";


const MenuItemDetails = ({dishes}) => {
  
  // Hooks from react-router-dom
  const navigate = useNavigate();
  const { id } = useParams();

  const meal = dishes.find((dish) => dish.id === id)
  
  return (
    <div className={styles.menuItemDetail}>
      <Button onClick={() => navigate("/")}>return Home</Button>
      <h1>{meal.description}</h1>
      <img
        src={meal.image}
        alt={meal.name}
        className={styles.image}
      />
    </div>
  );
};

export default MenuItemDetails;