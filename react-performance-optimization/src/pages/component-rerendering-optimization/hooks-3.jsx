import React, { useState } from "react";

function Example3() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);
  console.log("count", count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <div>{Math.random()}</div>
      <button onClick={() => setCount(5)}>Click me</button>
    </div>
  );
}

function Example4() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);
  console.log("Example4");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(1)}>Click me</button>
      <Div4 />
    </div>
  );
}

function Div4() {
  return <div>{Math.random()}</div>;
}

class App extends React.Component {
  render() {
    return (
      <>
        <Example3 />
        <hr />
        <Example4 />
      </>
    );
  }
}

export default App;
