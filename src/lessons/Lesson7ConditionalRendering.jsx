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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fruit-list-wrapper">
      <nav className="navbar">
        {/* // Step 1 login/logout button and display welcome message */}
      </nav>

      {/* // Step 2 display list */}

      {/* // Step 3 display large or small list conditionally. Let's check with and without key prop. */}

      {/* // Step 4 add remove button to list item. Let's check browser rendering in the dev tools with different keys! */}
    </div>
  );
}
