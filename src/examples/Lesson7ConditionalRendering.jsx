import { useState } from "react";

const seasonalFruits = [
  { id: crypto.randomUUID(), value: "apple" },
  { id: crypto.randomUUID(), value: "orange" },
  { id: crypto.randomUUID(), value: "grape" },
  { id: crypto.randomUUID(), value: "pear" },
];

const allFruits = [
  { id: crypto.randomUUID(), value: "apple" },
  { id: crypto.randomUUID(), value: "orange" },
  { id: crypto.randomUUID(), value: "grape" },
  { id: crypto.randomUUID(), value: "pear" },
  { id: crypto.randomUUID(), value: "kiwi" },
  { id: crypto.randomUUID(), value: "mango" },
  { id: crypto.randomUUID(), value: "banana" },
];

export default function FruitBasket() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAllFruits, setShowAllFruits] = useState(false);

  return (
    <div className="fruit-list-wrapper">
      <nav className="navbar">
        {!isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        )}
      </nav>

      {isLoggedIn && (
        <div>
          Welcome back!
          {!showAllFruits ? (
            <button onClick={() => setShowAllFruits(true)}>
              Show all fruits
            </button>
          ) : (
            <button onClick={() => setShowAllFruits(false)}>Show less</button>
          )}
          {showAllFruits ? (
            <FruitList key="all" fruits={allFruits} />
          ) : (
            <FruitList key="seasonal" fruits={seasonalFruits} />
          )}
        </div>
      )}
    </div>
  );
}

const FruitList = ({ fruits }) => {
  const [items, setItems] = useState(fruits);

  const removeItem = (id) => {
    setItems(items.filter((fruit) => fruit.id !== id));
  };

  return (
    <ul className="fruit-list">
      {items.map((fruit, index) => (
        <li key={index} className="fruit">
          {fruit.value}

          <button onClick={() => removeItem(fruit.id)}>remove</button>
        </li>
      ))}
    </ul>
  );
};
