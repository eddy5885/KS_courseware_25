import React, { useContext, useState, memo, useMemo } from "react";

interface Itheme {
  color: string;
}
const redTheme = {
  color: "red",
};

const greenTheme = {
  color: "green",
};

interface Icontext {
  theme: Itheme;
  testA: string;
  switchTheme: (e: Itheme) => void;
}

const globalContext = React.createContext<Icontext>({} as Icontext);

interface IProps {
  children: React.ReactNode;
}

interface IState {
  count: number;
}
class DemoProvider extends React.Component<IProps> {
  state = {
    theme: redTheme,
  };

  switchTheme = (theme: Itheme) => {
    this.setState({ theme });
  };

  render() {
    console.log("render Demo1");
    return (
      <globalContext.Provider
        value={{
          theme: this.state.theme,
          testA: "testA",
          switchTheme: this.switchTheme,
        }}
      >
        {this.props.children}
      </globalContext.Provider>
    );
  }
}

interface Icontext2 {
  testB: string;
  changeB: (e: string) => void;
}
const globalContext2 = React.createContext<Icontext2>({} as Icontext2);

interface Iprops2 {
  children: React.ReactNode;
}
class Demo2Provider extends React.PureComponent<Iprops2> {
  state = {
    testB: "testB",
  };

  changeB = (str: string) => {
    this.setState({ testB: str });
  };
  render() {
    console.log("render Demo2");
    return (
      <globalContext2.Provider
        value={{ testB: this.state.testB, changeB: this.changeB }}
      >
        {this.props.children}
      </globalContext2.Provider>
    );
  }
}

function Header() {
  console.log("render Header");
  return <div>this is header</div>;
}
function ComA() {
  console.log("render ComA");
  const { testA } = useContext(globalContext);

  return <div>this is ComA {testA}</div>;
}
function ComB() {
  const { testB, changeB } = useContext(globalContext2);
  console.log("render ComB", testB);

  return (
    <div>
      <p>this is ComB {testB}</p>
      <p>
        <button
          onClick={() => {
            changeB(testB + "bbb");
          }}
        >
          change btn
        </button>
      </p>
    </div>
  );
}
function ComC() {
  console.log("render ComC");
  const { testB } = useContext(globalContext2);

  return <div>this is ComC {testB}</div>;
}
function Content() {
  const { theme, switchTheme } = useContext(globalContext);
  console.log("render content");
  return (
    <>
      <h1 style={theme}>Hello world</h1>
      <Header />
      <button onClick={() => switchTheme(redTheme)}>Red Theme</button>
      <button onClick={() => switchTheme(greenTheme)}>Green Theme</button>
    </>
  );
}

export default function App() {
  return (
    <DemoProvider>
      <Demo2Provider>
        <hr />
        <Header />
        <hr />
        <ComA />
        <hr />
        <ComB />
        <hr />
        <ComC />
        <hr />
        <Content />
        <hr />
      </Demo2Provider>
    </DemoProvider>
  );
}
