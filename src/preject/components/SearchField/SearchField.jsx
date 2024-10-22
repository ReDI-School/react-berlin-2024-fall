import { useState } from "react";
import styles from "./SearchField.module.css";

/**
 * [ ] Task 1: Filter the list in the RestaurantView with onChange
 */

const SearchField = ({ filterDishes }) => {

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
      />
    </div>
  );
};

export default SearchField;