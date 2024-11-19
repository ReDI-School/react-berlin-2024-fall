import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page></Page>
    </ThemeContext.Provider>
  );
};

const Page = ({ children }) => {
  return (
    <>
      <div>
        <ThemeChangeButton></ThemeChangeButton>
      </div>

      <ThemeText></ThemeText>
      {children}
    </>
  );
};

const ThemeChangeButton = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme((theme) => {
          if (theme === "light") {
            return "dark";
          }
          return "light";
        });
      }}
    >
      Toggle Theme
    </button>
  );
};

const ThemeText = () => {
  const { theme } = useContext(ThemeContext);
  if (theme === "light") {
    return (
      <>
        Current theme is{" "}
        <div style={{ padding: 10, color: "black", background: "gray" }}>
          {theme}
        </div>
      </>
    );
  }
  if (theme === "dark") {
    return (
      <>
        Current theme is{" "}
        <div style={{ padding: 10, color: "white", background: "black" }}>
          {theme}
        </div>
      </>
    );
  }
  return <>Unknown theme found: {theme}</>;
};

const Lesson15ContextAPI = () => {
  return (
    <>
      <App />
    </>
  );
};

export default Lesson15ContextAPI;
