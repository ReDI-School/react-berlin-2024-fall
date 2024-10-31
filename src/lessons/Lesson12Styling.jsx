const RecipeCard = ({ title, image, description }) => {
  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Lesson12Styling = () => {
  return (
    <>
      <RecipeCard
        title="Margherita"
        image="images/margherita.jpg"
        description="Delicious starter"
      />
      <RecipeCard
        title="Bruschetta"
        image="images/bruschetta.jpg"
        description="Amazing main course"
      />
      <RecipeCard
        title="Cannoli"
        image="images/cannoli.jpg"
        description="Great dessert"
      />
    </>
  );
};

export default Lesson12Styling;
