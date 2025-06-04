import React, { useState, useContext, useEffect } from "react";

type Theme = "Light" | "Dark";

interface ThemeContextType {
  theme: Theme;
  toggle?: () => void;
}

function spendTime() {
  for (let i = 0; i < 19901000; i++) {}
}

const ThemeContext = React.createContext<ThemeContextType>({ theme: "Light" });

interface Iprops {
  children?: React.ReactNode;
}
const ThemeProvider: React.FC<Iprops> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>("Light");

  const toggle = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };
  spendTime();

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

function Comchildren1() {
  const context = useContext(ThemeContext);
  const { theme, toggle } = context;
  console.log("App theme:", context);
  spendTime();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button type="button" onClick={toggle}>
        toggle theme
      </button>
    </div>
  );
}

function Comchildren2() {
  console.log("this is component2");
  useEffect(() => {
    fetch("/api/testapi/");
  });
  spendTime();

  return <div>Comchildren2</div>;
}
function App() {
  spendTime();
  return (
    <ThemeProvider>
      <h1>Context 利用children防止子组件渲染</h1>
      <hr />
      <Comchildren1 />
      <hr />
      <Comchildren2 />
    </ThemeProvider>
  );
}

export default App;
