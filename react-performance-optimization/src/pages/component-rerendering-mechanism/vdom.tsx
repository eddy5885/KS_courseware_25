import React, { useEffect, useState } from "react";

function Page1() {
  const element1 = <div>Hello, World!111</div>;
  const element2 = document.createElement("div");
  console.log("element1", element1);
  console.log("element2", element2);

  function Greeting(props) {
    return <div>Hello, {props.name}!222</div>;
  }
  console.log("element3", <Greeting name="World" />);
  const element4 = React.createElement(
    "h1",
    { className: "main" },
    "Hello React (method 2)",
  );
  console.log("element4", element4);

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      {element1}
      <Greeting name="World" />
      {element4}
    </div>
  );
}

export default Page1;
