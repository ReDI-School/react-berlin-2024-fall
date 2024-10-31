import styled from "@emotion/styled";

import "./Lesson12Styling.css";

/*
  Side note:
  You can use many different style and component libraries with your React app.
  Some examples include:
  - Tailwind
  - Bootstrap
  - Ant Design
  - Material UI
*/

const Lesson12Styling = () => {
  return (
    <>
      <StyledContainer>
        <RecipeCard
          title="Margherita"
          image="images/margherita.jpg"
          description="Delicious starter"
        />
        <RecipeCard
          title="Bruschetta"
          flexGrow={3}
          isPromotion={true}
          // extraStyles={{ backgroundColor: "red" }}
          image="images/bruschetta.jpg"
          description="Amazing main course"
        />
        <RecipeCard
          title="Cannoli"
          image="images/cannoli.jpg"
          description="Great dessert"
        />
        <RecipeCard
          title="Risotto"
          image="images/risotto.jpg"
          description="Mmh, rice!"
        />
        <RecipeCard
          title="Cannoli"
          id="specialPromotion"
          image="images/cannoli.jpg"
          description="Great dessert"
        />
        <RecipeCard
          title="Cannoli"
          image="images/cannoli.jpg"
          description="Great dessert"
        />
      </StyledContainer>
    </>
  );
};

const RecipeCard = ({
  title,
  image,
  description,
  flexGrow,
  extraStyles,
  isPromotion,
  id,
}) => {
  return (
    <div
      id={id}
      style={{
        padding: 16, // we can define styles inline, as a JavaScript object
        flexGrow: flexGrow || 1, // uses the flexGrow prop, or 1 as default
        ...extraStyles, // apply any extra inline styles (through props)
      }}
      // this would result in "promotion recipeCard", or just " recipeCard"
      className={`${isPromotion ? "promotion" : ""} recipeCard`}
    >
      <img src={image} className="recipeCardImage" alt={title} />
      <h2 style={{ color: "black" }}>{title}</h2>
      <p style={{ color: "black" }}>{description}</p>
      <StyledButton isPromotion={isPromotion}>Order now!!</StyledButton>
    </div>
  );
};

const StyledContainer = styled.div`
  display: flex;
  max-width: 100vw;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledButton = styled.button`
  padding: 32px;
  background-color: ${(props) => (props.isPromotion ? "white" : "hotpink")};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0px;
    display: none;
  }

  @media screen and (min-width: 1200px) {
    border-radius: 40px;
  }
`;

export default Lesson12Styling;
