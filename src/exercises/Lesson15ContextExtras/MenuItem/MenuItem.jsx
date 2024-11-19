import Button from "../Button/Button";
import "./MenuItem.css";

const MenuItem = ({ dish, addDish }) => {
  const { name, image } = dish;
  return (
    <div className="menuItem">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className="menuItemBtnContainer">
        <Button name={name} onClick={addDish}>
          Add dish to cart
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;