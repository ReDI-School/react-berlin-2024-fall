// React course Preject

import styles from "./RestaurantView.module.css"
import dishes from "./mocks/dishes.json"
import NavBar from "./components/NavBar/NavBar"
import SearchField from "./components/SearchField/SearchField"
import MenuItem from "./components/MenuItem/MenuItem"

// Let's create a small restaurant application, using what we already learned so far.
// [ ] Task 1: What we want to see is a list of the dishes that we have in the mocks/dishes.json file
//     Notice that the dishes reference image files in the /public/images directory
//
// [ ] Task 2: then we will exercise our React powers by filtering and displaying only the dishes that match our filter
//     We should have a search bar where we update our list as soon as the input changes, and display all items if nothing is in our filter
//
// [ ] Task 3: then we will add routing to display not only the list of dishes, but also each dish individually by ID
//     We should have a main / route and a /meal/:id route at least
//

export default function RestaurantView() {
    return <>
        <NavBar>
            <h1>ReDI React Restaurant</h1>
            <SearchField />
        </NavBar>

        <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {dishes.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem
                dish={dish}
                key={dish.idMeal}
              />
            ))
          ) : (
            <p>No dishes found :(</p>
          )}
        </div>
      </div>
    </>
}