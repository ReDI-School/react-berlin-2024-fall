import Button from "../Button/Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ dish }) => {
  const { name, image } = dish;
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;