import styles from "./Dishes.module.css"
import MenuItem from "./MenuItem/MenuItem"

function Dishes({dishes}) {
    return <div className={styles.restaurantWrapper}>
        <h1>Welcome to our food stall!</h1>
        <div className={styles.menu}>
        {(dishes && dishes.length > 0) ? (
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
}
export default Dishes